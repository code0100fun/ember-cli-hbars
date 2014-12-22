# Ember CLI hbars

`npm install --save-dev ember-cli-hbars`

If only it were this easy to live on the edge. For now you'll have to configure Ember CLI to use at least Ember 1.10.0-beta.1.

You can read [this post](http://reefpoints.dockyard.com/2014/11/30/htmlbars_calling_all_testers.html) learn more but the tldr:

```
rm -rf bower_components
```

Then update to Ember canary:

```
bower install --save ember#canary
```

If you'd like to explicity lock in to the minimum version instead use:

```
bower install --save ember#1.10.0-beta.1
```

Then:

```
bower install --save handlebars#~2.0.0
bower install
npm uninstall --save-dev broccoli-ember-hbs-template-compiler
npm install --save-dev ember-cli-htmlbars
```
