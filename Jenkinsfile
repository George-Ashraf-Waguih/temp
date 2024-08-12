pipeline {
  agent any

  tools {
    nodejs 'Node' // Adjust this name to match your NodeJS installation name in Jenkins
  }

  stages {
    stage('Checkout') {
      steps {
        // Checkout the code from the repository
        git branch: 'main', url: 'https://github.com/George-Ashraf-Waguih/temp'
      }
    }

    stage('Install Dependencies') {
      steps {
        // Install the project dependencies
        sh 'npm install'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        // Run the Cypress tests
        sh 'npx cypress run'
      }
    }
  }

  post {
    always {
      // Archive test results and videos
      archiveArtifacts artifacts: 'cypress/videos/**/*.*', allowEmptyArchive: true
      archiveArtifacts artifacts: 'cypress/screenshots/**/*.*', allowEmptyArchive: true
      junit 'cypress/results/*.xml' // Adjust this path if you generate JUnit reports
    }
  }
}
