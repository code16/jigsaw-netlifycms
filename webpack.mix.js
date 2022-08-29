const mix = require('laravel-mix');
require('laravel-mix-jigsaw');

mix.disableSuccessNotifications();
mix.setPublicPath('source/assets/build');

mix.jigsaw()
    .js('source/_assets/js/main.js', 'js')
    .sass('source/_assets/scss/main.scss', 'css', { implementation: require('sass-embedded') })
    .options({
        processCssUrls: false,
    })
    .version();
