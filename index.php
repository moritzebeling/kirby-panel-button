<?php

use Kirby\Cms\App as Kirby;

Kirby::plugin('moritzebeling/kirby-panel-button', [
    'fields' => [
        'button' => [
            'props' => [
                'label' => function (string $label = 'Button') {
                    return $label;
                },
                'text' => function (string $text = 'Click here') {
                    return $text;
                },
                'url' => function (string $url) {
                    return $url;
                },
                'theme' => function (string $theme = null) {
                    return $theme;
                },
                'icon' => function (string $icon = 'refresh') {
                    return $icon;
                },
                'open' => function (bool $open = false) {
                    return $open;
                },
                'reload' => function (bool $reload = false) {
                    return $reload;
                },
                'help' => function (string $help = null) {
                    return $help;
                },
            ],
            'computed' => [
                'text' => function () {
                    if( $text = $this->text ){
                        $text = $this->model()->toSafeString($text);
                        return $text;
                    }
                },
                'url' => function () {
                    if( $url = $this->url ){
                        $url = $this->model()->toSafeString($url);
                        return $url;
                    }
                }
            ],
        ]
    ],

    // 'sections' => [
    //     'button' => [
    //         'props' => [
    //             'headline' => function (string $headline = 'Button section') {
    //                 return $headline;
    //             },
    //             'text' => function (string $text = null) {
    //                 return $text;
    //             },
    //             'button' => function (string $text = 'Click here') {
    //                 return $text;
    //             },
    //             'url' => function (string $url) {
    //                 return $url;
    //             },
    //             'theme' => function (string $theme = 'info') {
    //                 return $theme;
    //             },
    //             'icon' => function (string $icon = 'refresh') {
    //                 return $icon;
    //             }
    //         ],
    //     ]
    // ],

]);
