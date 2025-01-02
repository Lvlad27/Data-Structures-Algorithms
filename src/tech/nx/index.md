# How to configure project.json

In Nx, the project.json file is used to define the configuration for each project within your workspace. This file tells Nx how to build, serve, test, lint, and perform other tasks on your project. Each application or library in your Nx workspace can have its own project.json file, which allows you to customize the behavior of each project.

## Basic structure of project.json

```json
{
  <!-- The name of your project, which is used to identify it within the Nx workspace. -->
  "name": "your-project-name",

  <!-- The root directory of your project relative to the workspace's root. -->
  "root": "path-to-project-root",

  <!-- The directory where the source code of your project resides, relative to the root. -->
  "sourceRoot": "path-to-source-files",

  <!-- Defines whether the project is an application or a library. -->
  "projectType": "application-or-library",

  <!-- Defines a list of tasks (called "targets") that Nx can run on your project. Common targets include build, serve, lint, test, and deploy. -->
  "targets": {
    "target-name": {
      "executor": "executor-name",
      "options": {
        // Options specific to this target
      },
      "configurations": {
        "configuration-name": {
          // Options specific to this configuration
        }
      }
    }
  },

  <!-- A list of tags that you can assign to a project to categorize it within your workspace. These can be used for organizational purposes or to enforce certain rules. -->
  "tags": []
}
```

### Common Options

- **build**: Compiles your application into a format ready for deployment (e. g., optimized JavaScript, CSS, and HTML files).
- **outputPath**: Where the built files should be placed.
- **main**: The main entry file of your application (usually main.tsx for React apps).
- **assets**: A list of files or directories to be copied over during the build (e.g., images, fonts).
- **styles**: A list of global style files to be included in the build.
- **scripts**: A list of JavaScript files to be included.
- **serve**: Runs a development server that serves your application locally.
- **buildTarget**: Specifies the build target that should be used to serve the application (usually the build target).
- **proxyConfig**: Specifies a configuration file to set up proxying of API requests.
- **lint**: Runs a linter on your project’s code to check for coding errors or style issues.
- **lintFilePatterns**: Specifies the file patterns that should be linted.
- **test**: Runs the unit tests for your application.
- **jestConfig**: The path to the Jest configuration file.
- **passWithNoTests**: If true, the command will succeed even if no tests are found.
- **deploy**: A custom target for deploying your application to a server or cloud service.

### Configurations

Configurations allow you to define different sets of options for your targets. A common use case is to have different configurations for development and production builds.

- **development**: Usually the default configuration for local development. It’s optimized for speed and debugging.
- **production**: Optimized for performance, typically with features like minification, dead code elimination, and source maps turned off.
