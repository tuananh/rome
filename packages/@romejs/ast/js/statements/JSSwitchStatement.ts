/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AnyJSExpression, JSNodeBase, JSSwitchCase} from "@romejs/ast";
import {createBuilder} from "../utils";

export type JSSwitchStatement = JSNodeBase & {
	type: "JSSwitchStatement";
	discriminant: AnyJSExpression;
	cases: Array<JSSwitchCase>;
};

export const jsSwitchStatement = createBuilder<JSSwitchStatement>(
	"JSSwitchStatement",
	{
		bindingKeys: {},
		visitorKeys: {
			discriminant: true,
			cases: true,
		},
	},
);
