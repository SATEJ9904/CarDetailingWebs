pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
        DEPLOY_DIR = '/var/www/html/cardetailing'
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning car detailing repository...'
                git branch: 'main', credentialsId: 'Jenkins_Key', url: 'git@github.com:SATEJ9904/CarDetailingWebs.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing NPM packages...'
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                echo 'Building the car detailing app...'
                sh 'npm run build'
            }
        }

        stage('Prepare Deployment') {
            steps {
                echo 'Preparing deployment directory...'
                script {
                    // Check if directory exists and is writable
                    def dirExists = sh(script: "if [ -d ${DEPLOY_DIR} ]; then exit 0; else exit 1; fi", returnStatus: true) == 0
                    def dirWritable = sh(script: "if [ -w ${DEPLOY_DIR} ]; then exit 0; else exit 1; fi", returnStatus: true) == 0

                    if (!dirExists || !dirWritable) {
                        echo "Directory ${DEPLOY_DIR} needs setup"
                        sh """
                            sudo mkdir -p ${DEPLOY_DIR} || true
                            sudo chown -R jenkins:jenkins ${DEPLOY_DIR} || true
                            sudo chmod -R 755 ${DEPLOY_DIR} || true
                        """
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying car detailing build...'
                sh """
                    rm -rf ${DEPLOY_DIR}/*
                    cp -r build/* ${DEPLOY_DIR}/
                """
            }
        }

        stage('Configure Nginx') {
            steps {
                echo 'Updating Nginx configuration...'
                script {
                    def nginxConfig = '''server {
    listen 80;
    server_name 192.168.1.50;

    # FitnessFreak application
    location / {
        root /var/www/html/fitnessfreak;
        index index.html;
        try_files \\$uri \\$uri/ /index.html;
    }

    # Car Detailing application
    location /cardetailing {
        alias /var/www/html/cardetailing;
        index index.html;
        try_files \\$uri \\$uri/ /cardetailing/index.html;
    }
}'''

                    // Update Nginx configuration
                    sh """
                        # Backup existing config
                        sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/default.backup_\$(date +%Y%m%d%H%M%S) || true
                        
                        # Update the configuration
                        echo '${nginxConfig.replaceAll("'", "'\\\\''")}' | sudo tee /etc/nginx/sites-available/default > /dev/null
                        
                        # Test and reload Nginx
                        sudo nginx -t && sudo systemctl reload nginx
                    """
                }
            }
        }
    }

    post {
        success {
            echo '✅ Car detailing deployment completed successfully!'
            echo 'Access your application at: http://192.168.1.50/cardetailing'
        }
        failure {
            echo '❌ Car detailing deployment failed!'
        }
    }
}