import compile from "ember-template-compiler/system/compile";
import defaultEnv from "ember-htmlbars/env";
import { domHelper } from "ember-htmlbars/env";
import { equalHTML } from "htmlbars-test-helpers";
import merge from "ember-metal/merge";

if (Ember.FEATURES.isEnabled('ember-htmlbars')) {

  QUnit.module("ember-htmlbars: main");

  test("HTMLBars is present and can be executed", function() {
    var template = compile("ohai");

    var env = merge({ dom: domHelper }, defaultEnv);

    var output = template.render({}, env, document.body);
    equalHTML(output, "ohai");
  });
}