# inception-project.github.io

This repository hosts the code for the [INCEpTION website](https://inception-project.github.io/).

## Development

To setup the environment, run

    bundle install

once. Build locally with 

    bundle exec jekyll serve --config _config.yml,_config_dev.yml

This serves the site on <http://localhost:4000> and rebuilds it when files change. Use
`bundle exec jekyll build --config _config.yml,_config_dev.yml` to only generate `_site/` without
serving it. Passing `_config_dev.yml` sets the site URL to `localhost`, so leave it out if you want
the generated links to point at the production site.

### Troubleshooting

`Gemfile.lock` is not checked in, so the `github-pages` gem version is resolved fresh on each
`bundle install`. If a build fails with `Bundler::GemNotFound` listing many gems, the local
lockfile has become stale — delete `Gemfile.lock` and run `bundle install` again.

Do not install the gems inside the repository (e.g. `bundle install --path vendor/bundle`). Jekyll
would then scan the gems themselves and abort with an `Invalid date` error on a template file
shipped inside the Jekyll gem. Either use the default location or add the directory to `exclude`
in `_config.yml`.
