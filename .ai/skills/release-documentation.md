# Release Documentation

This skill guides you through releasing a new version of the Negative Development Docs.

## Release Process

1. **Checkout development branch**

    ```
    git checkout development
    git pull origin development
    ```

2. **Test the build**

    ```bash
    npm run docs:build
    ```

    - Wait for the build to complete successfully
    - Check for any errors or warnings
    - If build fails, fix issues before proceeding

3. **Increment version number**

    - Open `docs/.env`
    - Update `VITE_DOCS_VERSION_NUMBER` to the next version
    - Use semver: patch (0.3.1 → 0.3.2), minor (0.3.1 → 0.4.0), or major (0.3.1 → 1.0.0)
    - Commit the version bump

4. **Merge to main**

    ```bash
    git checkout main
    git merge development
    git push origin main
    ```

5. **GitHub Action deployment**
    - Merging to main triggers the GitHub Action workflow
    - The workflow builds and hosts the documentation automatically
    - Check the Actions tab on GitHub for deployment status

## Important Notes

- Always test the build on development before merging
- The `.env` file is in `docs/.env`, not the project root
- Version format: `'X.Y.Z'` (with quotes)
