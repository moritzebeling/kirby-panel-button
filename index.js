(function() {
  "use strict";
  const ButtonField_vue_vue_type_style_index_0_lang = "";
  function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
    var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
    if (render) {
      options.render = render;
      options.staticRenderFns = staticRenderFns;
      options._compiled = true;
    }
    if (functionalTemplate) {
      options.functional = true;
    }
    if (scopeId) {
      options._scopeId = "data-v-" + scopeId;
    }
    var hook;
    if (moduleIdentifier) {
      hook = function(context) {
        context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
        if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
          context = __VUE_SSR_CONTEXT__;
        }
        if (injectStyles) {
          injectStyles.call(this, context);
        }
        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      };
      options._ssrRegister = hook;
    } else if (injectStyles) {
      hook = shadowMode ? function() {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        );
      } : injectStyles;
    }
    if (hook) {
      if (options.functional) {
        options._injectStyles = hook;
        var originalRender = options.render;
        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
    return {
      exports: scriptExports,
      options
    };
  }
  const _sfc_main$1 = {
    props: {
      label: String,
      text: String,
      url: String,
      theme: String,
      icon: String
    }
  };
  var _sfc_render$1 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("k-field", { staticClass: "k-button-field", attrs: { "label": _vm.label } }, [_c("div", { staticClass: "k-button-field-button-wrapper" }, [_c("button", { staticClass: "k-button-field-button k-button k-box", attrs: { "type": "button", "data-theme": _vm.info } }, [_c("k-icon", { staticClass: "k-button-icon", attrs: { "type": _vm.icon } }), _c("span", { staticClass: "k-button-text" }, [_vm._v(_vm._s(_vm.text))])], 1)])]);
  };
  var _sfc_staticRenderFns$1 = [];
  _sfc_render$1._withStripped = true;
  var __component__$1 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$1,
    _sfc_render$1,
    _sfc_staticRenderFns$1,
    false,
    null,
    null,
    null,
    null
  );
  __component__$1.options.__file = "/Users/moritzebeling/WORK/kirby-shopify-test/site/plugins/kirby-panel-button/src/ButtonField.vue";
  const ButtonField = __component__$1.exports;
  const ButtonSection_vue_vue_type_style_index_0_lang = "";
  const _sfc_main = {
    data: function() {
      return {
        headline: null,
        text: null,
        button: null,
        url: null,
        theme: null,
        icon: null
      };
    },
    created: function() {
      this.load().then((response) => {
        this.headline = response.headline, this.text = response.text, this.button = response.button, this.url = response.url, this.theme = response.theme, this.icon = response.icon;
      });
    }
  };
  var _sfc_render = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("k-field", { staticClass: "k-button-section", attrs: { "label": _vm.headline } }, [_c("div", { staticClass: "k-box", attrs: { "data-theme": _vm.theme } }, [_vm.text ? _c("p", [_vm._v(_vm._s(_vm.text))]) : _vm._e(), _c("k-button", { attrs: { "icon": _vm.icon } }, [_vm._v(_vm._s(_vm.button))])], 1)]);
  };
  var _sfc_staticRenderFns = [];
  _sfc_render._withStripped = true;
  var __component__ = /* @__PURE__ */ normalizeComponent(
    _sfc_main,
    _sfc_render,
    _sfc_staticRenderFns,
    false,
    null,
    null,
    null,
    null
  );
  __component__.options.__file = "/Users/moritzebeling/WORK/kirby-shopify-test/site/plugins/kirby-panel-button/src/ButtonSection.vue";
  const ButtonSection = __component__.exports;
  panel.plugin("moritzebeling/panel-button", {
    fields: {
      button: ButtonField
    },
    sections: {
      button: ButtonSection
    }
  });
})();
