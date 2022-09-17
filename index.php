<?php

Kirby::plugin('moritzebeling/kirby-panel-button', [

    'fields' => [
        'button' => [
            'props' => [
                'label' => function (string $label = 'Button') {
                    return $label;
                },
                'text' => function (string $text = null) {
                    return $text;
                },
                'url' => function (string $url) {
                    return $url;
                },
                'theme' => function (string $theme = 'info') {
                    return $theme;
                }
            ]
        ]
    ]

]);