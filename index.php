<?php

Kirby::plugin('moritzebeling/kirby-panel-button', [

    'fields' => [
        'button' => [
            'props' => [
                'label' => function (string $label = 'Button') {
                    return $label;
                }
            ]
        ]
    ]

]);