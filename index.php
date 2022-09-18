<?php

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
            ]
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