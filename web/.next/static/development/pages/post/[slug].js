(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\post\\[slug].js"],{

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ "./node_modules/@sanity/client/lib/sanityClient.js");
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
  projectId: 'znl3u589',
  // you can find this in sanity.json
  dataset: 'production',
  // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data

}));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "./node_modules/core-js/library/fn/object/define-properties.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "./node_modules/core-js/library/fn/object/freeze.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@sanity/block-content-to-hyperscript/internals.js":
/*!************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-hyperscript/internals.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/internals */ "./node_modules/@sanity/block-content-to-hyperscript/lib/internals.js")


/***/ }),

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/blocksToNodes.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-hyperscript/lib/blocksToNodes.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var buildMarksTree = __webpack_require__(/*! ./buildMarksTree */ "./node_modules/@sanity/block-content-to-hyperscript/lib/buildMarksTree.js");

var nestLists = __webpack_require__(/*! ./nestLists */ "./node_modules/@sanity/block-content-to-hyperscript/lib/nestLists.js");

var generateKeys = __webpack_require__(/*! ./generateKeys */ "./node_modules/@sanity/block-content-to-hyperscript/lib/generateKeys.js");

var mergeSerializers = __webpack_require__(/*! ./mergeSerializers */ "./node_modules/@sanity/block-content-to-hyperscript/lib/mergeSerializers.js"); // Properties to extract from props and pass to serializers as options


var optionProps = ['projectId', 'dataset', 'imageOptions'];

var isDefined = function isDefined(val) {
  return typeof val !== 'undefined';
};

var defaults = {
  imageOptions: {}
};

function blocksToNodes(h, properties, defaultSerializers, serializeSpan) {
  var props = objectAssign({}, defaults, properties);
  var rawBlocks = Array.isArray(props.blocks) ? props.blocks : [props.blocks];
  var keyedBlocks = generateKeys(rawBlocks);
  var blocks = nestLists(keyedBlocks, props.listNestMode);
  var serializers = mergeSerializers(defaultSerializers, props.serializers || {});
  var options = optionProps.reduce(function (opts, key) {
    var value = props[key];

    if (isDefined(value)) {
      opts[key] = value;
    }

    return opts;
  }, {});

  function serializeNode(node, index, siblings, isInline) {
    if (isList(node)) {
      return serializeList(node);
    }

    if (isListItem(node)) {
      return serializeListItem(node, findListItemIndex(node, siblings));
    }

    if (isSpan(node)) {
      return serializeSpan(node, serializers, index, {
        serializeNode: serializeNode
      });
    }

    return serializeBlock(node, index, isInline);
  }

  function findListItemIndex(node, siblings) {
    var index = 0;

    for (var i = 0; i < siblings.length; i++) {
      if (siblings[i] === node) {
        return index;
      }

      if (!isListItem(siblings[i])) {
        continue;
      }

      index++;
    }

    return index;
  }

  function serializeBlock(block, index, isInline) {
    var tree = buildMarksTree(block);
    var children = tree.map(function (node, i, siblings) {
      return serializeNode(node, i, siblings, true);
    });
    var blockProps = {
      key: block._key || "block-".concat(index),
      node: block,
      isInline: isInline,
      serializers: serializers,
      options: options
    };
    return h(serializers.block, blockProps, children);
  }

  function serializeListItem(block, index) {
    var key = block._key;
    var tree = buildMarksTree(block);
    var children = tree.map(serializeNode);
    return h(serializers.listItem, {
      node: block,
      serializers: serializers,
      index: index,
      key: key,
      options: options
    }, children);
  }

  function serializeList(list) {
    var type = list.listItem;
    var level = list.level;
    var key = list._key;
    var children = list.children.map(serializeNode);
    return h(serializers.list, {
      key: key,
      level: level,
      type: type,
      options: options
    }, children);
  } // Default to false, so `undefined` will evaluate to the default here


  var renderContainerOnSingleChild = Boolean(props.renderContainerOnSingleChild);
  var nodes = blocks.map(serializeNode);

  if (renderContainerOnSingleChild || nodes.length > 1) {
    var containerProps = props.className ? {
      className: props.className
    } : {};
    return h(serializers.container, containerProps, nodes);
  }

  if (nodes[0]) {
    return nodes[0];
  }

  return typeof serializers.empty === 'function' ? h(serializers.empty) : serializers.empty;
}

function isList(block) {
  return block._type === 'list' && block.listItem;
}

function isListItem(block) {
  return block._type === 'block' && block.listItem;
}

function isSpan(block) {
  return typeof block === 'string' || block.marks || block._type === 'span';
}

module.exports = blocksToNodes;
//# sourceMappingURL=blocksToNodes.js.map

/***/ }),

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/buildMarksTree.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-hyperscript/lib/buildMarksTree.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaultMarks = ['strong', 'em', 'code', 'underline', 'strike-through'];

var buildMarksTree = function buildMarksTree(block) {
  var children = block.children,
      markDefs = block.markDefs;

  if (!children || !children.length) {
    return [];
  }

  var sortedMarks = children.map(sortMarksByOccurences);
  var rootNode = {
    _type: 'span',
    children: []
  };
  var nodeStack = [rootNode];
  children.forEach(function (span, i) {
    var marksNeeded = sortedMarks[i];

    if (!marksNeeded) {
      var lastNode = nodeStack[nodeStack.length - 1];
      lastNode.children.push(span);
      return;
    }

    var pos = 1; // Start at position one. Root is always plain and should never be removed. (?)

    if (nodeStack.length > 1) {
      for (pos; pos < nodeStack.length; pos++) {
        var mark = nodeStack[pos].markKey;
        var index = marksNeeded.indexOf(mark); // eslint-disable-next-line max-depth

        if (index === -1) {
          break;
        }

        marksNeeded.splice(index, 1);
      }
    } // Keep from beginning to first miss


    nodeStack = nodeStack.slice(0, pos); // Add needed nodes

    var currentNode = findLastParentNode(nodeStack);
    marksNeeded.forEach(function (mark) {
      var node = {
        _type: 'span',
        _key: span._key,
        children: [],
        mark: markDefs.find(function (def) {
          return def._key === mark;
        }) || mark,
        markKey: mark
      };
      currentNode.children.push(node);
      nodeStack.push(node);
      currentNode = node;
    }); // Split at newlines to make individual line chunks, but keep newline
    // characters as individual elements in the array. We use these characters
    // in the span serializer to trigger hard-break rendering

    if (isTextSpan(span)) {
      var lines = span.text.split('\n');

      for (var line = lines.length; line-- > 1;) {
        lines.splice(line, 0, '\n');
      }

      currentNode.children = currentNode.children.concat(lines);
    } else {
      currentNode.children = currentNode.children.concat(span);
    }
  });
  return rootNode.children;
}; // We want to sort all the marks of all the spans in the following order:
// 1. Marks that are shared amongst the most adjacent siblings
// 2. Non-default marks (links, custom metadata)
// 3. Built-in, plain marks (bold, emphasis, code etc)


function sortMarksByOccurences(span, i, spans) {
  if (!span.marks || span.marks.length === 0) {
    return span.marks || [];
  }

  var markOccurences = span.marks.reduce(function (occurences, mark) {
    occurences[mark] = occurences[mark] ? occurences[mark] + 1 : 1;

    for (var siblingIndex = i + 1; siblingIndex < spans.length; siblingIndex++) {
      var sibling = spans[siblingIndex];

      if (sibling.marks && Array.isArray(sibling.marks) && sibling.marks.indexOf(mark) !== -1) {
        occurences[mark]++;
      } else {
        break;
      }
    }

    return occurences;
  }, {});
  var sortByOccurence = sortMarks.bind(null, markOccurences); // Slicing because sort() mutates the input

  return span.marks.slice().sort(sortByOccurence);
}

function sortMarks(occurences, markA, markB) {
  var aOccurences = occurences[markA] || 0;
  var bOccurences = occurences[markB] || 0;

  if (aOccurences !== bOccurences) {
    return bOccurences - aOccurences;
  }

  var aDefaultPos = defaultMarks.indexOf(markA);
  var bDefaultPos = defaultMarks.indexOf(markB); // Sort default marks last

  if (aDefaultPos !== bDefaultPos) {
    return aDefaultPos - bDefaultPos;
  } // Sort other marks simply by key


  if (markA < markB) {
    return -1;
  } else if (markA > markB) {
    return 1;
  }

  return 0;
}

function isTextSpan(node) {
  return node._type === 'span' && typeof node.text === 'string' && (Array.isArray(node.marks) || typeof node.marks === 'undefined');
}

function findLastParentNode(nodes) {
  for (var i = nodes.length - 1; i >= 0; i--) {
    var node = nodes[i];

    if (node._type === 'span' && node.children) {
      return node;
    }
  }

  return undefined;
}

module.exports = buildMarksTree;
//# sourceMappingURL=buildMarksTree.js.map

/***/ }),

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/generateKeys.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-hyperscript/lib/generateKeys.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

module.exports = function (blocks) {
  return blocks.map(function (block) {
    if (block._key) {
      return block;
    }

    return objectAssign({
      _key: getStaticKey(block)
    }, block);
  });
};

function getStaticKey(item) {
  return checksum(JSON.stringify(item)).toString(36).replace(/[^A-Za-z0-9]/g, '');
}
/* eslint-disable no-bitwise */


function checksum(str) {
  var hash = 0;
  var strlen = str.length;

  if (strlen === 0) {
    return hash;
  }

  for (var i = 0; i < strlen; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash &= hash; // Convert to 32bit integer
  }

  return hash;
}
/* eslint-enable no-bitwise */
//# sourceMappingURL=generateKeys.js.map

/***/ }),

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/getImageUrl.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-hyperscript/lib/getImageUrl.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var generateHelpUrl = __webpack_require__(/*! @sanity/generate-help-url */ "./node_modules/@sanity/block-content-to-hyperscript/node_modules/@sanity/generate-help-url/index.js");

var urlBuilder = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");

var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var enc = encodeURIComponent;
var materializeError = "You must either:\n  - Pass `projectId` and `dataset` to the block renderer\n  - Materialize images to include the `url` field.\n\nFor more information, see ".concat(generateHelpUrl('block-content-image-materializing'));

var getQueryString = function getQueryString(options) {
  var query = options.imageOptions;
  var keys = Object.keys(query);

  if (!keys.length) {
    return '';
  }

  var params = keys.map(function (key) {
    return "".concat(enc(key), "=").concat(enc(query[key]));
  });
  return "?".concat(params.join('&'));
};

var buildUrl = function buildUrl(props) {
  var node = props.node,
      options = props.options;
  var projectId = options.projectId,
      dataset = options.dataset;
  var asset = node.asset;

  if (!asset) {
    throw new Error('Image does not have required `asset` property');
  }

  if (asset.url) {
    return asset.url + getQueryString(options);
  }

  if (!projectId || !dataset) {
    throw new Error(materializeError);
  }

  var ref = asset._ref;

  if (!ref) {
    throw new Error('Invalid image reference in block, no `_ref` found on `asset`');
  }

  return urlBuilder(objectAssign({
    projectId: projectId,
    dataset: dataset
  }, options.imageOptions || {})).image(node).toString();
};

module.exports = buildUrl;
//# sourceMappingURL=getImageUrl.js.map

/***/ }),

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/internals.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-hyperscript/lib/internals.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getSerializers = __webpack_require__(/*! ./serializers */ "./node_modules/@sanity/block-content-to-hyperscript/lib/serializers.js");

var _blocksToNodes = __webpack_require__(/*! ./blocksToNodes */ "./node_modules/@sanity/block-content-to-hyperscript/lib/blocksToNodes.js");

var getImageUrl = __webpack_require__(/*! ./getImageUrl */ "./node_modules/@sanity/block-content-to-hyperscript/lib/getImageUrl.js");

var mergeSerializers = __webpack_require__(/*! ./mergeSerializers */ "./node_modules/@sanity/block-content-to-hyperscript/lib/mergeSerializers.js");

module.exports = {
  blocksToNodes: function blocksToNodes(renderNode, props, defaultSerializers, serializeSpan) {
    if (defaultSerializers) {
      return _blocksToNodes(renderNode, props, defaultSerializers, serializeSpan);
    } // Backwards-compatibility


    var serializers = getSerializers(renderNode);
    return _blocksToNodes(renderNode, props, serializers.defaultSerializers, serializers.serializeSpan);
  },
  getSerializers: getSerializers,
  getImageUrl: getImageUrl,
  mergeSerializers: mergeSerializers
};
//# sourceMappingURL=internals.js.map

/***/ }),

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/mergeSerializers.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-hyperscript/lib/mergeSerializers.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var isDefined = function isDefined(val) {
  return typeof val !== 'undefined';
}; // Recursively merge/replace default serializers with user-specified serializers


module.exports = function mergeSerializers(defaultSerializers, userSerializers) {
  return Object.keys(defaultSerializers).reduce(function (acc, key) {
    var type = _typeof(defaultSerializers[key]);

    if (type === 'function') {
      acc[key] = isDefined(userSerializers[key]) ? userSerializers[key] : defaultSerializers[key];
    } else if (type === 'object') {
      acc[key] = objectAssign({}, defaultSerializers[key], userSerializers[key]);
    } else {
      acc[key] = typeof userSerializers[key] === 'undefined' ? defaultSerializers[key] : userSerializers[key];
    }

    return acc;
  }, {});
};
//# sourceMappingURL=mergeSerializers.js.map

/***/ }),

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/nestLists.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-hyperscript/lib/nestLists.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* eslint-disable max-depth, complexity */


function nestLists(blocks) {
  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'html';
  var tree = [];
  var currentList;

  for (var i = 0; i < blocks.length; i++) {
    var block = blocks[i];

    if (!isListBlock(block)) {
      tree.push(block);
      currentList = null;
      continue;
    } // Start of a new list?


    if (!currentList) {
      currentList = listFromBlock(block);
      tree.push(currentList);
      continue;
    } // New list item within same list?


    if (blockMatchesList(block, currentList)) {
      currentList.children.push(block);
      continue;
    } // Different list props, are we going deeper?


    if (block.level > currentList.level) {
      var newList = listFromBlock(block);

      if (mode === 'html') {
        // Because HTML is kinda weird, nested lists needs to be nested within list items
        // So while you would think that we could populate the parent list with a new sub-list,
        // We actually have to target the last list element (child) of the parent.
        // However, at this point we need to be very careful - simply pushing to the list of children
        // will mutate the input, and we don't want to blindly clone the entire tree.
        // Clone the last child while adding our new list as the last child of it
        var lastListItem = lastChild(currentList);
        var newLastChild = objectAssign({}, lastListItem, {
          children: lastListItem.children.concat(newList)
        }); // Swap the last child

        currentList.children[currentList.children.length - 1] = newLastChild;
      } else {
        currentList.children.push(newList);
      } // Set the newly created, deeper list as the current


      currentList = newList;
      continue;
    } // Different list props, are we going back up the tree?


    if (block.level < currentList.level) {
      // Current list has ended, and we need to hook up with a parent of the same level and type
      var match = findListMatching(tree[tree.length - 1], block);

      if (match) {
        currentList = match;
        currentList.children.push(block);
        continue;
      } // Similar parent can't be found, assume new list


      currentList = listFromBlock(block);
      tree.push(currentList);
      continue;
    } // Different list props, different list style?


    if (block.listItem !== currentList.listItem) {
      var _match = findListMatching(tree[tree.length - 1], {
        level: block.level
      });

      if (_match && _match.listItem === block.listItem) {
        currentList = _match;
        currentList.children.push(block);
        continue;
      } else {
        currentList = listFromBlock(block);
        tree.push(currentList);
        continue;
      }
    } // eslint-disable-next-line no-console


    console.warn('Unknown state encountered for block', block);
    tree.push(block);
  }

  return tree;
}

function isListBlock(block) {
  return Boolean(block.listItem);
}

function blockMatchesList(block, list) {
  return block.level === list.level && block.listItem === list.listItem;
}

function listFromBlock(block) {
  return {
    _type: 'list',
    _key: "".concat(block._key, "-parent"),
    level: block.level,
    listItem: block.listItem,
    children: [block]
  };
}

function lastChild(block) {
  return block.children && block.children[block.children.length - 1];
}

function findListMatching(rootNode, matching) {
  var filterOnType = typeof matching.listItem === 'string';

  if (rootNode._type === 'list' && rootNode.level === matching.level && filterOnType && rootNode.listItem === matching.listItem) {
    return rootNode;
  }

  var node = lastChild(rootNode);

  if (!node) {
    return false;
  }

  return findListMatching(node, matching);
}

module.exports = nestLists;
//# sourceMappingURL=nestLists.js.map

/***/ }),

/***/ "./node_modules/@sanity/block-content-to-hyperscript/lib/serializers.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-hyperscript/lib/serializers.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var getImageUrl = __webpack_require__(/*! ./getImageUrl */ "./node_modules/@sanity/block-content-to-hyperscript/lib/getImageUrl.js");

module.exports = function (h, serializerOpts) {
  var serializeOptions = serializerOpts || {
    useDashedStyles: false // Low-level block serializer

  };

  function BlockSerializer(props) {
    var node = props.node,
        serializers = props.serializers,
        options = props.options,
        isInline = props.isInline,
        children = props.children;
    var blockType = node._type;
    var serializer = serializers.types[blockType];

    if (!serializer) {
      throw new Error("Unknown block type \"".concat(blockType, "\", please specify a serializer for it in the `serializers.types` prop"));
    }

    return h(serializer, {
      node: node,
      options: options,
      isInline: isInline
    }, children);
  } // Low-level span serializer


  function SpanSerializer(props) {
    var _props$node = props.node,
        mark = _props$node.mark,
        children = _props$node.children;
    var isPlain = typeof mark === 'string';
    var markType = isPlain ? mark : mark._type;
    var serializer = props.serializers.marks[markType];

    if (!serializer) {
      // @todo Revert back to throwing errors?
      // eslint-disable-next-line no-console
      console.warn("Unknown mark type \"".concat(markType, "\", please specify a serializer for it in the `serializers.marks` prop"));
      return h(props.serializers.markFallback, null, children);
    }

    return h(serializer, props.node, children);
  } // Low-level list serializer


  function ListSerializer(props) {
    var tag = props.type === 'bullet' ? 'ul' : 'ol';
    return h(tag, null, props.children);
  } // Low-level list item serializer


  function ListItemSerializer(props) {
    var children = !props.node.style || props.node.style === 'normal' ? // Don't wrap plain text in paragraphs inside of a list item
    props.children : // But wrap any other style in whatever the block serializer says to use
    h(props.serializers.types.block, props, props.children);
    return h('li', null, children);
  } // Renderer of an actual block of type `block`. Confusing, we know.


  function BlockTypeSerializer(props) {
    var style = props.node.style || 'normal';

    if (/^h\d/.test(style)) {
      return h(style, null, props.children);
    }

    return style === 'blockquote' ? h('blockquote', null, props.children) : h('p', null, props.children);
  } // Serializers for things that can be directly attributed to a tag without any props
  // We use partial application to do this, passing the tag name as the first argument


  function RawMarkSerializer(tag, props) {
    return h(tag, null, props.children);
  }

  function UnderlineSerializer(props) {
    var style = serializeOptions.useDashedStyles ? {
      'text-decoration': 'underline'
    } : {
      textDecoration: 'underline'
    };
    return h('span', {
      style: style
    }, props.children);
  }

  function StrikeThroughSerializer(props) {
    return h('del', null, props.children);
  }

  function LinkSerializer(props) {
    return h('a', {
      href: props.mark.href
    }, props.children);
  }

  function ImageSerializer(props) {
    if (!props.node.asset) {
      return null;
    }

    var img = h('img', {
      src: getImageUrl(props)
    });
    return props.isInline ? img : h('figure', null, img);
  } // Serializer that recursively calls itself, producing a hyperscript tree of spans


  function serializeSpan(span, serializers, index, options) {
    if (span === '\n' && serializers.hardBreak) {
      return h(serializers.hardBreak, {
        key: "hb-".concat(index)
      });
    }

    if (typeof span === 'string') {
      return serializers.text ? h(serializers.text, {
        key: "text-".concat(index)
      }, span) : span;
    }

    var children;

    if (span.children) {
      children = {
        children: span.children.map(function (child, i) {
          return options.serializeNode(child, i, span.children, true);
        })
      };
    }

    var serializedNode = objectAssign({}, span, children);
    return h(serializers.span, {
      key: span._key || "span-".concat(index),
      node: serializedNode,
      serializers: serializers
    });
  }

  var HardBreakSerializer = function HardBreakSerializer() {
    return h('br');
  };

  var defaultMarkSerializers = {
    strong: RawMarkSerializer.bind(null, 'strong'),
    em: RawMarkSerializer.bind(null, 'em'),
    code: RawMarkSerializer.bind(null, 'code'),
    underline: UnderlineSerializer,
    'strike-through': StrikeThroughSerializer,
    link: LinkSerializer
  };
  var defaultSerializers = {
    // Common overrides
    types: {
      block: BlockTypeSerializer,
      image: ImageSerializer
    },
    marks: defaultMarkSerializers,
    // Less common overrides
    list: ListSerializer,
    listItem: ListItemSerializer,
    block: BlockSerializer,
    span: SpanSerializer,
    hardBreak: HardBreakSerializer,
    // Container element
    container: 'div',
    // When we can't resolve the mark properly, use this renderer as the container
    markFallback: 'span',
    // Allow overriding text renderer, but leave undefined to just use plain strings by default
    text: undefined,
    // Empty nodes (React uses null, hyperscript with empty strings)
    empty: ''
  };
  return {
    defaultSerializers: defaultSerializers,
    serializeSpan: serializeSpan
  };
};
//# sourceMappingURL=serializers.js.map

/***/ }),

/***/ "./node_modules/@sanity/block-content-to-hyperscript/node_modules/@sanity/generate-help-url/index.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-hyperscript/node_modules/@sanity/generate-help-url/index.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var baseUrl = 'https://docs.sanity.io/help/'

module.exports = function generateHelpUrl(slug) {
  return baseUrl + slug
}


/***/ }),

/***/ "./node_modules/@sanity/block-content-to-react/lib/BlockContent.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-react/lib/BlockContent.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
var internals = __webpack_require__(/*! @sanity/block-content-to-hyperscript/internals */ "./node_modules/@sanity/block-content-to-hyperscript/internals.js");

var _require = __webpack_require__(/*! ./targets/dom */ "./node_modules/@sanity/block-content-to-react/lib/targets/dom.js"),
    serializers = _require.serializers,
    serializeSpan = _require.serializeSpan,
    renderProps = _require.renderProps;

var getImageUrl = internals.getImageUrl,
    blocksToNodes = internals.blocksToNodes,
    mergeSerializers = internals.mergeSerializers;

var renderNode = React.createElement;

var SanityBlockContent = function SanityBlockContent(props) {
  var customSerializers = mergeSerializers(SanityBlockContent.defaultSerializers, props.serializers);

  var blockProps = Object.assign({}, renderProps, props, {
    serializers: customSerializers,
    blocks: props.blocks || []
  });

  return blocksToNodes(renderNode, blockProps, serializers, serializeSpan);
};

// Expose default serializers to the user
SanityBlockContent.defaultSerializers = serializers;

// Expose logic for building image URLs from an image reference/node
SanityBlockContent.getImageUrl = getImageUrl;

SanityBlockContent.propTypes = {
  className: PropTypes.string,
  renderContainerOnSingleChild: PropTypes.bool,

  // When rendering images, we need project id and dataset, unless images are materialized
  projectId: PropTypes.string,
  dataset: PropTypes.string,
  imageOptions: PropTypes.object,

  serializers: PropTypes.shape({
    // Common overrides
    types: PropTypes.object,
    marks: PropTypes.object,

    // Less common overrides
    list: PropTypes.func,
    listItem: PropTypes.func,

    // Low-level serializers
    block: PropTypes.func,
    span: PropTypes.func
  }),

  blocks: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape({
    _type: PropTypes.string.isRequired
  })), PropTypes.shape({
    _type: PropTypes.string.isRequired
  })]).isRequired
};

SanityBlockContent.defaultProps = {
  renderContainerOnSingleChild: false,
  serializers: {},
  imageOptions: {}
};

module.exports = SanityBlockContent;
//# sourceMappingURL=BlockContent.js.map

/***/ }),

/***/ "./node_modules/@sanity/block-content-to-react/lib/targets/dom.js":
/*!************************************************************************!*\
  !*** ./node_modules/@sanity/block-content-to-react/lib/targets/dom.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _require = __webpack_require__(/*! @sanity/block-content-to-hyperscript/internals */ "./node_modules/@sanity/block-content-to-hyperscript/internals.js"),
    getSerializers = _require.getSerializers;

var renderNode = React.createElement;

var _getSerializers = getSerializers(renderNode),
    defaultSerializers = _getSerializers.defaultSerializers,
    serializeSpan = _getSerializers.serializeSpan;

module.exports = {
  serializeSpan: serializeSpan,
  serializers: defaultSerializers,
  renderProps: { nestMarks: true }
};
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "./node_modules/@sanity/client/lib/assets/assetsClient.js":
/*!****************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/assets/assetsClient.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var _require = __webpack_require__(/*! @sanity/observable/operators/map */ "./node_modules/@sanity/observable/operators/map.js"),
    map = _require.map;

var _require2 = __webpack_require__(/*! @sanity/observable/operators/filter */ "./node_modules/@sanity/observable/operators/filter.js"),
    filter = _require2.filter;

var queryString = __webpack_require__(/*! ../http/queryString */ "./node_modules/@sanity/client/lib/http/queryString.js");

var validators = __webpack_require__(/*! ../validators */ "./node_modules/@sanity/client/lib/validators.js");

function AssetsClient(client) {
  this.client = client;
}

function toDocument(body) {
  // todo: rewrite to just return body.document in a while
  var document = body.document;
  Object.defineProperty(document, 'document', {
    enumerable: false,
    get: function get() {
      // eslint-disable-next-line no-console
      console.warn('The promise returned from client.asset.upload(...) now resolves with the asset document');
      return document;
    }
  });
  return document;
}

function optionsFromFile(opts, file) {
  if (typeof window === 'undefined' || !(file instanceof window.File)) {
    return opts;
  }

  return assign({
    filename: opts.preserveFilename === false ? undefined : file.name,
    contentType: file.type
  }, opts);
}

assign(AssetsClient.prototype, {
  /**
   * Upload an asset
   *
   * @param  {String} assetType `image` or `file`
   * @param  {File|Blob|Buffer|ReadableStream} body File to upload
   * @param  {Object}  opts Options for the upload
   * @param  {Boolean} opts.preserveFilename Whether or not to preserve the original filename (default: true)
   * @param  {String}  opts.filename Filename for this file (optional)
   * @param  {Number}  opts.timeout  Milliseconds to wait before timing the request out (default: 0)
   * @param  {String}  opts.contentType Mime type of the file
   * @param  {Array}   opts.extract Array of metadata parts to extract from image.
   *                                 Possible values: `location`, `exif`, `image`, `palette`
   * @param  {String}  opts.label Label
   * @param  {String}  opts.title Title
   * @param  {String}  opts.description Description
   * @param  {String}  opts.creditLine The credit to person(s) and/or organization(s) required by the supplier of the image to be used when published
   * @param  {Object}  opts.source Source data (when the asset is from an external service)
   * @param  {String}  opts.source.id The (u)id of the asset within the source, i.e. 'i-f323r1E'
   *                                  Required if source is defined
   * @param  {String}  opts.source.name The name of the source, i.e. 'unsplash'
   *                                  Required if source is defined
   * @param  {String}  opts.source.url A url to where to find the asset, or get more info about it in the source
   *                                  Optional
   * @return {Promise} Resolves with the created asset document
   */
  upload: function upload(assetType, body) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    validators.validateAssetType(assetType); // If an empty array is given, explicitly set `none` to override API defaults

    var meta = opts.extract || undefined;

    if (meta && !meta.length) {
      meta = ['none'];
    }

    var dataset = validators.hasDataset(this.client.clientConfig);
    var assetEndpoint = assetType === 'image' ? 'images' : 'files';
    var options = optionsFromFile(opts, body);
    var label = options.label,
        title = options.title,
        description = options.description,
        creditLine = options.creditLine,
        filename = options.filename,
        source = options.source;
    var query = {
      label: label,
      title: title,
      description: description,
      filename: filename,
      meta: meta,
      creditLine: creditLine
    };

    if (source) {
      query.sourceId = source.id;
      query.sourceName = source.name;
      query.sourceUrl = source.url;
    }

    var observable = this.client._requestObservable({
      method: 'POST',
      timeout: options.timeout || 0,
      uri: "/assets/".concat(assetEndpoint, "/").concat(dataset),
      headers: options.contentType ? {
        'Content-Type': options.contentType
      } : {},
      query: query,
      body: body
    });

    return this.client.isPromiseAPI() ? observable.pipe(filter(function (event) {
      return event.type === 'response';
    }), map(function (event) {
      return toDocument(event.body);
    })).toPromise() : observable;
  },
  delete: function _delete(type, id) {
    // eslint-disable-next-line no-console
    console.warn('client.assets.delete() is deprecated, please use client.delete(<document-id>)');
    var docId = id || '';

    if (!/^(image|file)-/.test(docId)) {
      docId = "".concat(type, "-").concat(docId);
    } else if (type._id) {
      // We could be passing an entire asset document instead of an ID
      docId = type._id;
    }

    validators.hasDataset(this.client.clientConfig);
    return this.client.delete(docId);
  },
  getImageUrl: function getImageUrl(ref, query) {
    var id = ref._ref || ref;

    if (typeof id !== 'string') {
      throw new Error('getImageUrl() needs either an object with a _ref, or a string with an asset document ID');
    }

    if (!/^image-[A-Za-z0-9_]+-\d+x\d+-[a-z]{1,5}$/.test(id)) {
      throw new Error("Unsupported asset ID \"".concat(id, "\". URL generation only works for auto-generated IDs."));
    }

    var _id$split = id.split('-'),
        _id$split2 = _slicedToArray(_id$split, 4),
        assetId = _id$split2[1],
        size = _id$split2[2],
        format = _id$split2[3];

    validators.hasDataset(this.client.clientConfig);
    var _this$client$clientCo = this.client.clientConfig,
        projectId = _this$client$clientCo.projectId,
        dataset = _this$client$clientCo.dataset;
    var qs = query ? queryString(query) : '';
    return "https://cdn.sanity.io/images/".concat(projectId, "/").concat(dataset, "/").concat(assetId, "-").concat(size, ".").concat(format).concat(qs);
  }
});
module.exports = AssetsClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/auth/authClient.js":
/*!************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/auth/authClient.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

function AuthClient(client) {
  this.client = client;
}

assign(AuthClient.prototype, {
  getLoginProviders: function getLoginProviders() {
    return this.client.request({
      uri: '/auth/providers'
    });
  },
  logout: function logout() {
    return this.client.request({
      uri: '/auth/logout',
      method: 'POST'
    });
  }
});
module.exports = AuthClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/config.js":
/*!***************************************************!*\
  !*** ./node_modules/@sanity/client/lib/config.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var generateHelpUrl = __webpack_require__(/*! @sanity/generate-help-url */ "./node_modules/@sanity/generate-help-url/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var validate = __webpack_require__(/*! ./validators */ "./node_modules/@sanity/client/lib/validators.js");

var once = __webpack_require__(/*! ./util/once */ "./node_modules/@sanity/client/lib/util/once.js");

var defaultCdnHost = 'apicdn.sanity.io';
var defaultConfig = {
  apiHost: 'https://api.sanity.io',
  useProjectHostname: true,
  gradientMode: false,
  isPromiseAPI: true
};
var LOCALHOSTS = ['localhost', '127.0.0.1', '0.0.0.0'];

var isLocal = function isLocal(host) {
  return LOCALHOSTS.indexOf(host) !== -1;
}; // eslint-disable-next-line no-console


var createWarningPrinter = function createWarningPrinter(message) {
  return once(function () {
    return console.warn(message.join(' '));
  });
};

var printCdnWarning = createWarningPrinter(['You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and', "cheaper. Think about it! For more info, see ".concat(generateHelpUrl('js-client-cdn-configuration'), "."), 'To hide this warning, please set the `useCdn` option to either `true` or `false` when creating', 'the client.']);
var printBrowserTokenWarning = createWarningPrinter(['You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.', "See ".concat(generateHelpUrl('js-client-browser-token'), " for more information and how to hide this warning.")]);
var printCdnTokenWarning = createWarningPrinter(['You have set `useCdn` to `true` while also specifying a token. This is usually not what you', 'want. The CDN cannot be used with an authorization token, since private data cannot be cached.', "See ".concat(generateHelpUrl('js-client-usecdn-token'), " for more information.")]);
exports.defaultConfig = defaultConfig;

exports.initConfig = function (config, prevConfig) {
  var newConfig = assign({}, defaultConfig, prevConfig, config);
  var gradientMode = newConfig.gradientMode;
  var projectBased = !gradientMode && newConfig.useProjectHostname;

  if (typeof Promise === 'undefined') {
    var helpUrl = generateHelpUrl('js-client-promise-polyfill');
    throw new Error("No native Promise-implementation found, polyfill needed - see ".concat(helpUrl));
  }

  if (gradientMode && !newConfig.namespace) {
    throw new Error('Configuration must contain `namespace` when running in gradient mode');
  }

  if (projectBased && !newConfig.projectId) {
    throw new Error('Configuration must contain `projectId`');
  }

  var isBrowser = typeof window !== 'undefined' && window.location && window.location.hostname;
  var isLocalhost = isBrowser && isLocal(window.location.hostname);

  if (isBrowser && isLocalhost && newConfig.token && newConfig.ignoreBrowserTokenWarning !== true) {
    printBrowserTokenWarning();
  } else if ((!isBrowser || isLocalhost) && newConfig.useCdn && newConfig.token) {
    printCdnTokenWarning();
  } else if (typeof newConfig.useCdn === 'undefined') {
    printCdnWarning();
  }

  if (projectBased) {
    validate.projectId(newConfig.projectId);
  }

  if (!gradientMode && newConfig.dataset) {
    validate.dataset(newConfig.dataset, newConfig.gradientMode);
  }

  newConfig.isDefaultApi = newConfig.apiHost === defaultConfig.apiHost;
  newConfig.useCdn = Boolean(newConfig.useCdn) && !newConfig.token && !newConfig.withCredentials;

  if (newConfig.gradientMode) {
    newConfig.url = newConfig.apiHost;
    newConfig.cdnUrl = newConfig.apiHost;
  } else {
    var hostParts = newConfig.apiHost.split('://', 2);
    var protocol = hostParts[0];
    var host = hostParts[1];
    var cdnHost = newConfig.isDefaultApi ? defaultCdnHost : host;

    if (newConfig.useProjectHostname) {
      newConfig.url = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(host, "/v1");
      newConfig.cdnUrl = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(cdnHost, "/v1");
    } else {
      newConfig.url = "".concat(newConfig.apiHost, "/v1");
      newConfig.cdnUrl = newConfig.url;
    }
  }

  return newConfig;
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/data/dataMethods.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/data/dataMethods.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var _require = __webpack_require__(/*! @sanity/observable/operators/filter */ "./node_modules/@sanity/observable/operators/filter.js"),
    filter = _require.filter;

var _require2 = __webpack_require__(/*! @sanity/observable/operators/map */ "./node_modules/@sanity/observable/operators/map.js"),
    map = _require2.map;

var validators = __webpack_require__(/*! ../validators */ "./node_modules/@sanity/client/lib/validators.js");

var getSelection = __webpack_require__(/*! ../util/getSelection */ "./node_modules/@sanity/client/lib/util/getSelection.js");

var encodeQueryString = __webpack_require__(/*! ./encodeQueryString */ "./node_modules/@sanity/client/lib/data/encodeQueryString.js");

var Transaction = __webpack_require__(/*! ./transaction */ "./node_modules/@sanity/client/lib/data/transaction.js");

var Patch = __webpack_require__(/*! ./patch */ "./node_modules/@sanity/client/lib/data/patch.js");

var listen = __webpack_require__(/*! ./listen */ "./node_modules/@sanity/client/lib/data/listen.js");

var excludeFalsey = function excludeFalsey(param, defValue) {
  var value = typeof param === 'undefined' ? defValue : param;
  return param === false ? undefined : value;
};

var getMutationQuery = function getMutationQuery() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    returnIds: true,
    returnDocuments: excludeFalsey(options.returnDocuments, true),
    visibility: options.visibility || 'sync'
  };
};

var isResponse = function isResponse(event) {
  return event.type === 'response';
};

var getBody = function getBody(event) {
  return event.body;
};

var indexBy = function indexBy(docs, attr) {
  return docs.reduce(function (indexed, doc) {
    indexed[attr(doc)] = doc;
    return indexed;
  }, Object.create(null));
};

var toPromise = function toPromise(observable) {
  return observable.toPromise();
};

var getQuerySizeLimit = 11264;
module.exports = {
  listen: listen,
  getDataUrl: function getDataUrl(operation, path) {
    var config = this.clientConfig;
    var catalog = config.gradientMode ? config.namespace : validators.hasDataset(config);
    var baseUri = "/".concat(operation, "/").concat(catalog);
    var uri = path ? "".concat(baseUri, "/").concat(path) : baseUri;
    return (this.clientConfig.gradientMode ? uri : "/data".concat(uri)).replace(/\/($|\?)/, '$1');
  },
  fetch: function fetch(query, params) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var mapResponse = options.filterResponse === false ? function (res) {
      return res;
    } : function (res) {
      return res.result;
    };

    var observable = this._dataRequest('query', {
      query: query,
      params: params
    }, options).pipe(map(mapResponse));

    return this.isPromiseAPI() ? toPromise(observable) : observable;
  },
  getDocument: function getDocument(id) {
    var options = {
      uri: this.getDataUrl('doc', id),
      json: true
    };

    var observable = this._requestObservable(options).pipe(filter(isResponse), map(function (event) {
      return event.body.documents && event.body.documents[0];
    }));

    return this.isPromiseAPI() ? toPromise(observable) : observable;
  },
  getDocuments: function getDocuments(ids) {
    var options = {
      uri: this.getDataUrl('doc', ids.join(',')),
      json: true
    };

    var observable = this._requestObservable(options).pipe(filter(isResponse), map(function (event) {
      var indexed = indexBy(event.body.documents || [], function (doc) {
        return doc._id;
      });
      return ids.map(function (id) {
        return indexed[id] || null;
      });
    }));

    return this.isPromiseAPI() ? toPromise(observable) : observable;
  },
  create: function create(doc, options) {
    return this._create(doc, 'create', options);
  },
  createIfNotExists: function createIfNotExists(doc, options) {
    validators.requireDocumentId('createIfNotExists', doc);
    return this._create(doc, 'createIfNotExists', options);
  },
  createOrReplace: function createOrReplace(doc, options) {
    validators.requireDocumentId('createOrReplace', doc);
    return this._create(doc, 'createOrReplace', options);
  },
  patch: function patch(selector, operations) {
    return new Patch(selector, operations, this);
  },
  delete: function _delete(selection, options) {
    return this.dataRequest('mutate', {
      mutations: [{
        delete: getSelection(selection)
      }]
    }, options);
  },
  mutate: function mutate(mutations, options) {
    var mut = mutations instanceof Patch || mutations instanceof Transaction ? mutations.serialize() : mutations;
    var muts = Array.isArray(mut) ? mut : [mut];
    var transactionId = options && options.transactionId;
    return this.dataRequest('mutate', {
      mutations: muts,
      transactionId: transactionId
    }, options);
  },
  transaction: function transaction(operations) {
    return new Transaction(operations, this);
  },
  dataRequest: function dataRequest(endpoint, body) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var request = this._dataRequest(endpoint, body, options);

    return this.isPromiseAPI() ? toPromise(request) : request;
  },
  _dataRequest: function _dataRequest(endpoint, body) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var isMutation = endpoint === 'mutate'; // Check if the query string is within a configured threshold,
    // in which case we can use GET. Otherwise, use POST.

    var strQuery = !isMutation && encodeQueryString(body);
    var useGet = !isMutation && strQuery.length < getQuerySizeLimit;
    var stringQuery = useGet ? strQuery : '';
    var returnFirst = options.returnFirst;
    var timeout = options.timeout,
        token = options.token;
    var uri = this.getDataUrl(endpoint, stringQuery);
    var reqOptions = {
      method: useGet ? 'GET' : 'POST',
      uri: uri,
      json: true,
      body: useGet ? undefined : body,
      query: isMutation && getMutationQuery(options),
      timeout: timeout,
      token: token
    };
    return this._requestObservable(reqOptions).pipe(filter(isResponse), map(getBody), map(function (res) {
      if (!isMutation) {
        return res;
      } // Should we return documents?


      var results = res.results || [];

      if (options.returnDocuments) {
        return returnFirst ? results[0] && results[0].document : results.map(function (mut) {
          return mut.document;
        });
      } // Return a reduced subset


      var key = returnFirst ? 'documentId' : 'documentIds';
      var ids = returnFirst ? results[0] && results[0].id : results.map(function (mut) {
        return mut.id;
      });
      return _defineProperty({
        transactionId: res.transactionId,
        results: results
      }, key, ids);
    }));
  },
  _create: function _create(doc, op) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var mutation = _defineProperty({}, op, doc);

    var opts = assign({
      returnFirst: true,
      returnDocuments: true
    }, options);
    return this.dataRequest('mutate', {
      mutations: [mutation]
    }, opts);
  }
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/data/encodeQueryString.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/data/encodeQueryString.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enc = encodeURIComponent;

module.exports = function (_ref) {
  var query = _ref.query,
      _ref$params = _ref.params,
      params = _ref$params === void 0 ? {} : _ref$params,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options;
  var base = "?query=".concat(enc(query));
  var qString = Object.keys(params).reduce(function (qs, param) {
    return "".concat(qs, "&").concat(enc("$".concat(param)), "=").concat(enc(JSON.stringify(params[param])));
  }, base);
  return Object.keys(options).reduce(function (qs, option) {
    // Only include the option if it is truthy
    return options[option] ? "".concat(qs, "&").concat(enc(option), "=").concat(enc(options[option])) : qs;
  }, qString);
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/data/listen.js":
/*!********************************************************!*\
  !*** ./node_modules/@sanity/client/lib/data/listen.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var Observable = __webpack_require__(/*! @sanity/observable/minimal */ "./node_modules/@sanity/observable/minimal.js");

var polyfilledEventSource = __webpack_require__(/*! @sanity/eventsource */ "./node_modules/@sanity/eventsource/browser.js");

var pick = __webpack_require__(/*! ../util/pick */ "./node_modules/@sanity/client/lib/util/pick.js");

var defaults = __webpack_require__(/*! ../util/defaults */ "./node_modules/@sanity/client/lib/util/defaults.js");

var encodeQueryString = __webpack_require__(/*! ./encodeQueryString */ "./node_modules/@sanity/client/lib/data/encodeQueryString.js");

var generateHelpUrl = __webpack_require__(/*! @sanity/generate-help-url */ "./node_modules/@sanity/generate-help-url/index.js");

var once = __webpack_require__(/*! ../util/once */ "./node_modules/@sanity/client/lib/util/once.js");

var tokenWarning = ['Using token with listeners is not supported in browsers. ', "For more info, see ".concat(generateHelpUrl('js-client-listener-tokens-browser'), ".")]; // eslint-disable-next-line no-console

var printTokenWarning = once(function () {
  return console.warn(tokenWarning.join(' '));
});
var isWindowEventSource = Boolean(typeof window !== 'undefined' && window.EventSource);
var EventSource = isWindowEventSource ? window.EventSource // Native browser EventSource
: polyfilledEventSource; // Node.js, IE etc

var possibleOptions = ['includePreviousRevision', 'includeResult', 'visibility'];
var defaultOptions = {
  includeResult: true
};

module.exports = function listen(query, params) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var options = defaults(opts, defaultOptions);
  var listenOpts = pick(options, possibleOptions);
  var qs = encodeQueryString({
    query: query,
    params: params,
    options: listenOpts
  });
  var _this$clientConfig = this.clientConfig,
      url = _this$clientConfig.url,
      token = _this$clientConfig.token,
      withCredentials = _this$clientConfig.withCredentials;
  var uri = "".concat(url).concat(this.getDataUrl('listen', qs));
  var listenFor = options.events ? options.events : ['mutation'];
  var shouldEmitReconnect = listenFor.indexOf('reconnect') !== -1;

  if (token && isWindowEventSource) {
    printTokenWarning();
  }

  var esOptions = {};

  if (token || withCredentials) {
    esOptions.withCredentials = true;
  }

  if (token) {
    esOptions.headers = {
      Authorization: "Bearer ".concat(token)
    };
  }

  return new Observable(function (observer) {
    var es = getEventSource();
    var reconnectTimer;
    var stopped = false;

    function onError() {
      if (stopped) {
        return;
      }

      emitReconnect(); // Allow event handlers of `emitReconnect` to cancel/close the reconnect attempt

      if (stopped) {
        return;
      } // Unless we've explicitly stopped the ES (in which case `stopped` should be true),
      // we should never be in a disconnected state. By default, EventSource will reconnect
      // automatically, in which case it sets readyState to `CONNECTING`, but in some cases
      // (like when a laptop lid is closed), it closes the connection. In these cases we need
      // to explicitly reconnect.


      if (es.readyState === EventSource.CLOSED) {
        unsubscribe();
        clearTimeout(reconnectTimer);
        reconnectTimer = setTimeout(open, 100);
      }
    }

    function onChannelError(err) {
      observer.error(cooerceError(err));
    }

    function onMessage(evt) {
      var event = parseEvent(evt);
      return event instanceof Error ? observer.error(event) : observer.next(event);
    }

    function onDisconnect(evt) {
      stopped = true;
      unsubscribe();
      observer.complete();
    }

    function unsubscribe() {
      es.removeEventListener('error', onError, false);
      es.removeEventListener('channelError', onChannelError, false);
      es.removeEventListener('disconnect', onDisconnect, false);
      listenFor.forEach(function (type) {
        return es.removeEventListener(type, onMessage, false);
      });
      es.close();
    }

    function emitReconnect() {
      if (shouldEmitReconnect) {
        observer.next({
          type: 'reconnect'
        });
      }
    }

    function getEventSource() {
      var evs = new EventSource(uri, esOptions);
      evs.addEventListener('error', onError, false);
      evs.addEventListener('channelError', onChannelError, false);
      evs.addEventListener('disconnect', onDisconnect, false);
      listenFor.forEach(function (type) {
        return evs.addEventListener(type, onMessage, false);
      });
      return evs;
    }

    function open() {
      es = getEventSource();
    }

    function stop() {
      stopped = true;
      unsubscribe();
    }

    return stop;
  });
};

function parseEvent(event) {
  try {
    var data = event.data && JSON.parse(event.data) || {};
    return assign({
      type: event.type
    }, data);
  } catch (err) {
    return err;
  }
}

function cooerceError(err) {
  if (err instanceof Error) {
    return err;
  }

  var evt = parseEvent(err);
  return evt instanceof Error ? evt : new Error(extractErrorMessage(evt));
}

function extractErrorMessage(err) {
  if (!err.error) {
    return err.message || 'Unknown listener error';
  }

  if (err.error.description) {
    return err.error.description;
  }

  return typeof err.error === 'string' ? err.error : JSON.stringify(err.error, null, 2);
}

/***/ }),

/***/ "./node_modules/@sanity/client/lib/data/patch.js":
/*!*******************************************************!*\
  !*** ./node_modules/@sanity/client/lib/data/patch.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var deepAssign = __webpack_require__(/*! deep-assign */ "./node_modules/deep-assign/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var getSelection = __webpack_require__(/*! ../util/getSelection */ "./node_modules/@sanity/client/lib/util/getSelection.js");

var validate = __webpack_require__(/*! ../validators */ "./node_modules/@sanity/client/lib/validators.js");

var validateObject = validate.validateObject;
var validateInsert = validate.validateInsert;

function Patch(selection) {
  var operations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var client = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  this.selection = selection;
  this.operations = assign({}, operations);
  this.client = client;
}

assign(Patch.prototype, {
  clone: function clone() {
    return new Patch(this.selection, assign({}, this.operations), this.client);
  },
  merge: function merge(props) {
    validateObject('merge', props);
    var stack = new Error().stack.toString().split('\n').filter(function (str) {
      return str.trim();
    }).slice(2);
    console.warn("The \"merge\" patch has been deprecated and will be removed in the future\n".concat(stack.join('\n')));
    return this._assign('merge', deepAssign(this.operations.merge || {}, props));
  },
  set: function set(props) {
    return this._assign('set', props);
  },
  diffMatchPatch: function diffMatchPatch(props) {
    validateObject('diffMatchPatch', props);
    return this._assign('diffMatchPatch', props);
  },
  unset: function unset(attrs) {
    if (!Array.isArray(attrs)) {
      throw new Error('unset(attrs) takes an array of attributes to unset, non-array given');
    }

    this.operations = assign({}, this.operations, {
      unset: attrs
    });
    return this;
  },
  setIfMissing: function setIfMissing(props) {
    return this._assign('setIfMissing', props);
  },
  replace: function replace(props) {
    validateObject('replace', props);
    return this._set('set', {
      $: props
    }); // eslint-disable-line id-length
  },
  inc: function inc(props) {
    return this._assign('inc', props);
  },
  dec: function dec(props) {
    return this._assign('dec', props);
  },
  insert: function insert(at, selector, items) {
    var _this$_assign;

    validateInsert(at, selector, items);
    return this._assign('insert', (_this$_assign = {}, _defineProperty(_this$_assign, at, selector), _defineProperty(_this$_assign, "items", items), _this$_assign));
  },
  append: function append(selector, items) {
    return this.insert('after', "".concat(selector, "[-1]"), items);
  },
  prepend: function prepend(selector, items) {
    return this.insert('before', "".concat(selector, "[0]"), items);
  },
  splice: function splice(selector, start, deleteCount, items) {
    // Negative indexes doesn't mean the same in Sanity as they do in JS;
    // -1 means "actually at the end of the array", which allows inserting
    // at the end of the array without knowing its length. We therefore have
    // to substract negative indexes by one to match JS. If you want Sanity-
    // behaviour, just use `insert('replace', selector, items)` directly
    var delAll = typeof deleteCount === 'undefined' || deleteCount === -1;
    var startIndex = start < 0 ? start - 1 : start;
    var delCount = delAll ? -1 : Math.max(0, start + deleteCount);
    var delRange = startIndex < 0 && delCount >= 0 ? '' : delCount;
    var rangeSelector = "".concat(selector, "[").concat(startIndex, ":").concat(delRange, "]");
    return this.insert('replace', rangeSelector, items || []);
  },
  ifRevisionId: function ifRevisionId(rev) {
    this.operations.ifRevisionID = rev;
    return this;
  },
  serialize: function serialize() {
    return assign(getSelection(this.selection), this.operations);
  },
  toJSON: function toJSON() {
    return this.serialize();
  },
  commit: function commit() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!this.client) {
      throw new Error('No `client` passed to patch, either provide one or pass the ' + 'patch to a clients `mutate()` method');
    }

    var returnFirst = typeof this.selection === 'string';
    var opts = assign({
      returnFirst: returnFirst,
      returnDocuments: true
    }, options);
    return this.client.mutate({
      patch: this.serialize()
    }, opts);
  },
  reset: function reset() {
    this.operations = {};
    return this;
  },
  _set: function _set(op, props) {
    return this._assign(op, props, false);
  },
  _assign: function _assign(op, props) {
    var merge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    validateObject(op, props);
    this.operations = assign({}, this.operations, _defineProperty({}, op, assign({}, merge && this.operations[op] || {}, props)));
    return this;
  }
});
module.exports = Patch;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/data/transaction.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/data/transaction.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var validators = __webpack_require__(/*! ../validators */ "./node_modules/@sanity/client/lib/validators.js");

var Patch = __webpack_require__(/*! ./patch */ "./node_modules/@sanity/client/lib/data/patch.js");

var defaultMutateOptions = {
  returnDocuments: false
};

function Transaction() {
  var operations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var client = arguments.length > 1 ? arguments[1] : undefined;
  var transactionId = arguments.length > 2 ? arguments[2] : undefined;
  this.trxId = transactionId;
  this.operations = operations;
  this.client = client;
}

assign(Transaction.prototype, {
  clone: function clone() {
    return new Transaction(this.operations.slice(0), this.client, this.trxId);
  },
  create: function create(doc) {
    validators.validateObject('create', doc);
    return this._add({
      create: doc
    });
  },
  createIfNotExists: function createIfNotExists(doc) {
    var op = 'createIfNotExists';
    validators.validateObject(op, doc);
    validators.requireDocumentId(op, doc);
    return this._add(_defineProperty({}, op, doc));
  },
  createOrReplace: function createOrReplace(doc) {
    var op = 'createOrReplace';
    validators.validateObject(op, doc);
    validators.requireDocumentId(op, doc);
    return this._add(_defineProperty({}, op, doc));
  },
  delete: function _delete(documentId) {
    validators.validateDocumentId('delete', documentId);
    return this._add({
      delete: {
        id: documentId
      }
    });
  },
  patch: function patch(documentId, patchOps) {
    var isBuilder = typeof patchOps === 'function';
    var isPatch = documentId instanceof Patch; // transaction.patch(client.patch('documentId').inc({visits: 1}))

    if (isPatch) {
      return this._add({
        patch: documentId.serialize()
      });
    } // patch => patch.inc({visits: 1}).set({foo: 'bar'})


    if (isBuilder) {
      var patch = patchOps(new Patch(documentId, {}, this.client));

      if (!(patch instanceof Patch)) {
        throw new Error('function passed to `patch()` must return the patch');
      }

      return this._add({
        patch: patch.serialize()
      });
    }

    return this._add({
      patch: assign({
        id: documentId
      }, patchOps)
    });
  },
  transactionId: function transactionId(id) {
    if (!id) {
      return this.trxId;
    }

    this.trxId = id;
    return this;
  },
  serialize: function serialize() {
    return this.operations.slice();
  },
  toJSON: function toJSON() {
    return this.serialize();
  },
  commit: function commit(options) {
    if (!this.client) {
      throw new Error('No `client` passed to transaction, either provide one or pass the ' + 'transaction to a clients `mutate()` method');
    }

    return this.client.mutate(this.serialize(), assign({
      transactionId: this.trxId
    }, defaultMutateOptions, options || {}));
  },
  reset: function reset() {
    this.operations = [];
    return this;
  },
  _add: function _add(mut) {
    this.operations.push(mut);
    return this;
  }
});
module.exports = Transaction;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/datasets/datasetsClient.js":
/*!********************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/datasets/datasetsClient.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var validate = __webpack_require__(/*! ../validators */ "./node_modules/@sanity/client/lib/validators.js");

function DatasetsClient(client) {
  this.request = client.request.bind(client);
}

assign(DatasetsClient.prototype, {
  create: function create(name, options) {
    return this._modify('PUT', name, options);
  },
  edit: function edit(name, options) {
    return this._modify('PATCH', name, options);
  },
  delete: function _delete(name) {
    return this._modify('DELETE', name);
  },
  list: function list() {
    return this.request({
      uri: '/datasets'
    });
  },
  _modify: function _modify(method, name, body) {
    validate.dataset(name);
    return this.request({
      method: method,
      uri: "/datasets/".concat(name),
      body: body
    });
  }
});
module.exports = DatasetsClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/http/browserMiddleware.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/http/browserMiddleware.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [];

/***/ }),

/***/ "./node_modules/@sanity/client/lib/http/errors.js":
/*!********************************************************!*\
  !*** ./node_modules/@sanity/client/lib/http/errors.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var makeError = __webpack_require__(/*! make-error */ "./node_modules/make-error/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

function ClientError(res) {
  var props = extractErrorProps(res);
  ClientError.super.call(this, props.message);
  assign(this, props);
}

function ServerError(res) {
  var props = extractErrorProps(res);
  ServerError.super.call(this, props.message);
  assign(this, props);
}

function extractErrorProps(res) {
  var body = res.body;
  var props = {
    response: res,
    statusCode: res.statusCode,
    responseBody: stringifyBody(body, res)
  }; // API/Boom style errors ({statusCode, error, message})

  if (body.error && body.message) {
    props.message = "".concat(body.error, " - ").concat(body.message);
    return props;
  } // Query/database errors ({error: {description, other, arb, props}})


  if (body.error && body.error.description) {
    props.message = body.error.description;
    props.details = body.error;
    return props;
  } // Other, more arbitrary errors


  props.message = body.error || body.message || httpErrorMessage(res);
  return props;
}

function httpErrorMessage(res) {
  var statusMessage = res.statusMessage ? " ".concat(res.statusMessage) : '';
  return "".concat(res.method, "-request to ").concat(res.url, " resulted in HTTP ").concat(res.statusCode).concat(statusMessage);
}

function stringifyBody(body, res) {
  var contentType = (res.headers['content-type'] || '').toLowerCase();
  var isJson = contentType.indexOf('application/json') !== -1;
  return isJson ? JSON.stringify(body, null, 2) : body;
}

makeError(ClientError);
makeError(ServerError);
exports.ClientError = ClientError;
exports.ServerError = ServerError;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/http/queryString.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/http/queryString.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (params) {
  var qs = [];

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      qs.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(params[key])));
    }
  }

  return qs.length > 0 ? "?".concat(qs.join('&')) : '';
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/http/request.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sanity/client/lib/http/request.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-empty-function, no-process-env */
var getIt = __webpack_require__(/*! get-it */ "./node_modules/get-it/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var observable = __webpack_require__(/*! get-it/lib/middleware/observable */ "./node_modules/get-it/lib/middleware/observable.js");

var jsonRequest = __webpack_require__(/*! get-it/lib/middleware/jsonRequest */ "./node_modules/get-it/lib/middleware/jsonRequest.js");

var jsonResponse = __webpack_require__(/*! get-it/lib/middleware/jsonResponse */ "./node_modules/get-it/lib/middleware/jsonResponse.js");

var progress = __webpack_require__(/*! get-it/lib/middleware/progress */ "./node_modules/get-it/lib/middleware/progress/index.js");

var Observable = __webpack_require__(/*! @sanity/observable/minimal */ "./node_modules/@sanity/observable/minimal.js");

var _require = __webpack_require__(/*! ./errors */ "./node_modules/@sanity/client/lib/http/errors.js"),
    ClientError = _require.ClientError,
    ServerError = _require.ServerError;

var httpError = {
  onResponse: function onResponse(res) {
    if (res.statusCode >= 500) {
      throw new ServerError(res);
    } else if (res.statusCode >= 400) {
      throw new ClientError(res);
    }

    return res;
  }
}; // Environment-specific middleware.

var envSpecific = __webpack_require__(/*! ./nodeMiddleware */ "./node_modules/@sanity/client/lib/http/browserMiddleware.js");

var middleware = envSpecific.concat([jsonRequest(), jsonResponse(), progress(), httpError, observable({
  implementation: Observable
})]);
var request = getIt(middleware);

function httpRequest(options) {
  var requester = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : request;
  return requester(assign({
    maxRedirects: 0
  }, options));
}

httpRequest.defaultRequester = request;
httpRequest.ClientError = ClientError;
httpRequest.ServerError = ServerError;
module.exports = httpRequest;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/http/requestOptions.js":
/*!****************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/http/requestOptions.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var projectHeader = 'X-Sanity-Project-ID';

module.exports = function (config) {
  var overrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var headers = {};
  var token = overrides.token || config.token;

  if (token) {
    headers.Authorization = "Bearer ".concat(token);
  }

  if (!overrides.useGlobalApi && !config.useProjectHostname && config.projectId) {
    headers[projectHeader] = config.projectId;
  }

  var withCredentials = Boolean(typeof overrides.withCredentials === 'undefined' ? config.token || config.withCredentials : overrides.withCredentials);
  var timeout = typeof overrides.timeout === 'undefined' ? config.timeout : overrides.timeout;
  return assign({}, overrides, {
    headers: assign({}, headers, overrides.headers || {}),
    timeout: typeof timeout === 'undefined' ? 5 * 60 * 1000 : timeout,
    json: true,
    withCredentials: withCredentials
  });
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/projects/projectsClient.js":
/*!********************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/projects/projectsClient.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

function ProjectsClient(client) {
  this.client = client;
}

assign(ProjectsClient.prototype, {
  list: function list() {
    return this.client.request({
      uri: '/projects'
    });
  },
  getById: function getById(id) {
    return this.client.request({
      uri: "/projects/".concat(id)
    });
  }
});
module.exports = ProjectsClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/sanityClient.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sanity/client/lib/sanityClient.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var _require = __webpack_require__(/*! @sanity/observable/operators/filter */ "./node_modules/@sanity/observable/operators/filter.js"),
    filter = _require.filter;

var _require2 = __webpack_require__(/*! @sanity/observable/operators/map */ "./node_modules/@sanity/observable/operators/map.js"),
    map = _require2.map;

var Patch = __webpack_require__(/*! ./data/patch */ "./node_modules/@sanity/client/lib/data/patch.js");

var Transaction = __webpack_require__(/*! ./data/transaction */ "./node_modules/@sanity/client/lib/data/transaction.js");

var dataMethods = __webpack_require__(/*! ./data/dataMethods */ "./node_modules/@sanity/client/lib/data/dataMethods.js");

var DatasetsClient = __webpack_require__(/*! ./datasets/datasetsClient */ "./node_modules/@sanity/client/lib/datasets/datasetsClient.js");

var ProjectsClient = __webpack_require__(/*! ./projects/projectsClient */ "./node_modules/@sanity/client/lib/projects/projectsClient.js");

var AssetsClient = __webpack_require__(/*! ./assets/assetsClient */ "./node_modules/@sanity/client/lib/assets/assetsClient.js");

var UsersClient = __webpack_require__(/*! ./users/usersClient */ "./node_modules/@sanity/client/lib/users/usersClient.js");

var AuthClient = __webpack_require__(/*! ./auth/authClient */ "./node_modules/@sanity/client/lib/auth/authClient.js");

var httpRequest = __webpack_require__(/*! ./http/request */ "./node_modules/@sanity/client/lib/http/request.js");

var getRequestOptions = __webpack_require__(/*! ./http/requestOptions */ "./node_modules/@sanity/client/lib/http/requestOptions.js");

var _require3 = __webpack_require__(/*! ./config */ "./node_modules/@sanity/client/lib/config.js"),
    defaultConfig = _require3.defaultConfig,
    initConfig = _require3.initConfig;

var toPromise = function toPromise(observable) {
  return observable.toPromise();
};

function SanityClient() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultConfig;

  if (!(this instanceof SanityClient)) {
    return new SanityClient(config);
  }

  this.config(config);
  this.assets = new AssetsClient(this);
  this.datasets = new DatasetsClient(this);
  this.projects = new ProjectsClient(this);
  this.users = new UsersClient(this);
  this.auth = new AuthClient(this);

  if (this.clientConfig.isPromiseAPI) {
    var observableConfig = assign({}, this.clientConfig, {
      isPromiseAPI: false
    });
    this.observable = new SanityClient(observableConfig);
  }
}

assign(SanityClient.prototype, dataMethods);
assign(SanityClient.prototype, {
  clone: function clone() {
    return new SanityClient(this.config());
  },
  config: function config(newConfig) {
    if (typeof newConfig === 'undefined') {
      return assign({}, this.clientConfig);
    }

    if (this.observable) {
      var observableConfig = assign({}, newConfig, {
        isPromiseAPI: false
      });
      this.observable.config(observableConfig);
    }

    this.clientConfig = initConfig(newConfig, this.clientConfig || {});
    return this;
  },
  getUrl: function getUrl(uri) {
    var canUseCdn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var base = canUseCdn ? this.clientConfig.cdnUrl : this.clientConfig.url;
    return "".concat(base, "/").concat(uri.replace(/^\//, ''));
  },
  isPromiseAPI: function isPromiseAPI() {
    return this.clientConfig.isPromiseAPI;
  },
  _requestObservable: function _requestObservable(options) {
    var uri = options.url || options.uri;
    var canUseCdn = this.clientConfig.useCdn && ['GET', 'HEAD'].indexOf(options.method || 'GET') >= 0 && uri.indexOf('/data/') === 0;
    var reqOptions = getRequestOptions(this.clientConfig, assign({}, options, {
      url: this.getUrl(uri, canUseCdn)
    }));
    return httpRequest(reqOptions, this.clientConfig.requester);
  },
  request: function request(options) {
    var observable = this._requestObservable(options).pipe(filter(function (event) {
      return event.type === 'response';
    }), map(function (event) {
      return event.body;
    }));

    return this.isPromiseAPI() ? toPromise(observable) : observable;
  }
});
SanityClient.Patch = Patch;
SanityClient.Transaction = Transaction;
SanityClient.ClientError = httpRequest.ClientError;
SanityClient.ServerError = httpRequest.ServerError;
SanityClient.requester = httpRequest.defaultRequester;
module.exports = SanityClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/users/usersClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/users/usersClient.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

function UsersClient(client) {
  this.client = client;
}

assign(UsersClient.prototype, {
  getById: function getById(id) {
    return this.client.request({
      uri: "/users/".concat(id)
    });
  }
});
module.exports = UsersClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/util/defaults.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sanity/client/lib/util/defaults.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj, defaults) {
  return Object.keys(defaults).concat(Object.keys(obj)).reduce(function (target, prop) {
    target[prop] = typeof obj[prop] === 'undefined' ? defaults[prop] : obj[prop];
    return target;
  }, {});
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/util/getSelection.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/util/getSelection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function getSelection(sel) {
  if (typeof sel === 'string' || Array.isArray(sel)) {
    return {
      id: sel
    };
  }

  if (sel && sel.query) {
    return {
      query: sel.query
    };
  }

  var selectionOpts = ['* Document ID (<docId>)', '* Array of document IDs', '* Object containing `query`'].join('\n');
  throw new Error("Unknown selection - must be one of:\n\n".concat(selectionOpts));
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/util/once.js":
/*!******************************************************!*\
  !*** ./node_modules/@sanity/client/lib/util/once.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (fn) {
  var didCall = false;
  var returnValue;
  return function () {
    if (didCall) {
      return returnValue;
    }

    returnValue = fn.apply(void 0, arguments);
    didCall = true;
    return returnValue;
  };
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/util/pick.js":
/*!******************************************************!*\
  !*** ./node_modules/@sanity/client/lib/util/pick.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj, props) {
  return props.reduce(function (selection, prop) {
    if (typeof obj[prop] === 'undefined') {
      return selection;
    }

    selection[prop] = obj[prop];
    return selection;
  }, {});
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/validators.js":
/*!*******************************************************!*\
  !*** ./node_modules/@sanity/client/lib/validators.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var VALID_ASSET_TYPES = ['image', 'file'];
var VALID_INSERT_LOCATIONS = ['before', 'after', 'replace'];

exports.dataset = function (name) {
  if (!/^[-\w]{1,128}$/.test(name)) {
    throw new Error('Datasets can only contain lowercase characters, numbers, underscores and dashes');
  }
};

exports.projectId = function (id) {
  if (!/^[-a-z0-9]+$/i.test(id)) {
    throw new Error('`projectId` can only contain only a-z, 0-9 and dashes');
  }
};

exports.validateAssetType = function (type) {
  if (VALID_ASSET_TYPES.indexOf(type) === -1) {
    throw new Error("Invalid asset type: ".concat(type, ". Must be one of ").concat(VALID_ASSET_TYPES.join(', ')));
  }
};

exports.validateObject = function (op, val) {
  if (val === null || _typeof(val) !== 'object' || Array.isArray(val)) {
    throw new Error("".concat(op, "() takes an object of properties"));
  }
};

exports.requireDocumentId = function (op, doc) {
  if (!doc._id) {
    throw new Error("".concat(op, "() requires that the document contains an ID (\"_id\" property)"));
  }

  exports.validateDocumentId(op, doc._id);
};

exports.validateDocumentId = function (op, id) {
  if (typeof id !== 'string' || !/^[a-z0-9_.-]+$/i.test(id)) {
    throw new Error("".concat(op, "(): \"").concat(id, "\" is not a valid document ID"));
  }
};

exports.validateInsert = function (at, selector, items) {
  var signature = 'insert(at, selector, items)';

  if (VALID_INSERT_LOCATIONS.indexOf(at) === -1) {
    var valid = VALID_INSERT_LOCATIONS.map(function (loc) {
      return "\"".concat(loc, "\"");
    }).join(', ');
    throw new Error("".concat(signature, " takes an \"at\"-argument which is one of: ").concat(valid));
  }

  if (typeof selector !== 'string') {
    throw new Error("".concat(signature, " takes a \"selector\"-argument which must be a string"));
  }

  if (!Array.isArray(items)) {
    throw new Error("".concat(signature, " takes an \"items\"-argument which must be an array"));
  }
};

exports.hasDataset = function (config) {
  if (!config.gradientMode && !config.dataset) {
    throw new Error('`dataset` must be provided to perform queries');
  }

  return config.dataset || '';
};

/***/ }),

/***/ "./node_modules/@sanity/eventsource/browser.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sanity/eventsource/browser.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-var */
var evs = __webpack_require__(/*! eventsource-polyfill/dist/eventsource */ "./node_modules/eventsource-polyfill/dist/eventsource.js")
module.exports = window.EventSource || evs.EventSource


/***/ }),

/***/ "./node_modules/@sanity/generate-help-url/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sanity/generate-help-url/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var baseUrl = 'https://docs.sanity.io/help/'

module.exports = function generateHelpUrl(slug) {
  return baseUrl + slug
}


/***/ }),

/***/ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@sanity/image-url/lib/browser/image-url.umd.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () {
  var example = 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg';
  function parseAssetId(ref) {
    var ref$1 = ref.split('-');
    var id = ref$1[1];
    var dimensionString = ref$1[2];
    var format = ref$1[3];

    if (!id || !dimensionString || !format) {
      throw new Error(("Malformed asset _ref '" + ref + "'. Expected an id like \"" + example + "\"."));
    }

    var ref$2 = dimensionString.split('x');
    var imgWidthStr = ref$2[0];
    var imgHeightStr = ref$2[1];
    var width = +imgWidthStr;
    var height = +imgHeightStr;
    var isValidAssetId = isFinite(width) && isFinite(height);

    if (!isValidAssetId) {
      throw new Error(("Malformed asset _ref '" + ref + "'. Expected an id like \"" + example + "\"."));
    }

    return {
      id: id,
      width: width,
      height: height,
      format: format
    };
  }

  var isRef = function (src) {
    var source = src;
    return source ? typeof source._ref === 'string' : false;
  };

  var isAsset = function (src) {
    var source = src;
    return source ? typeof source._id === 'string' : false;
  };

  var isAssetStub = function (src) {
    var source = src;
    return source && source.asset ? typeof source.asset.url === 'string' : false;
  }; // Convert an asset-id, asset or image to an image record suitable for processing
  // eslint-disable-next-line complexity


  function parseSource(source) {
    if (!source) {
      return null;
    }

    var image;

    if (typeof source === 'string' && isUrl(source)) {
      // Someone passed an existing image url?
      image = {
        asset: {
          _ref: urlToId(source)
        }
      };
    } else if (typeof source === 'string') {
      // Just an asset id
      image = {
        asset: {
          _ref: source
        }
      };
    } else if (isRef(source)) {
      // We just got passed an asset directly
      image = {
        asset: source
      };
    } else if (isAsset(source)) {
      // If we were passed an image asset document
      image = {
        asset: {
          _ref: source._id || ''
        }
      };
    } else if (isAssetStub(source)) {
      // If we were passed a partial asset (`url`, but no `_id`)
      image = {
        asset: {
          _ref: urlToId(source.asset.url)
        }
      };
    } else if (typeof source.asset === 'object') {
      // Probably an actual image with materialized asset
      image = source;
    } else {
      // We got something that does not look like an image, or it is an image
      // that currently isn't sporting an asset.
      return null;
    }

    var img = source;

    if (img.crop) {
      image.crop = img.crop;
    }

    if (img.hotspot) {
      image.hotspot = img.hotspot;
    }

    return applyDefaults(image);
  }

  function isUrl(url) {
    return /^https?:\/\//.test(("" + url));
  }

  function urlToId(url) {
    var parts = url.split('/').slice(-1);
    return ("image-" + (parts[0])).replace(/\.([a-z]+)$/, '-$1');
  } // Mock crop and hotspot if image lacks it


  function applyDefaults(image) {
    if (image.crop && image.hotspot) {
      return image;
    } // We need to pad in default values for crop or hotspot


    var result = Object.assign({}, image);

    if (!result.crop) {
      result.crop = {
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
      };
    }

    if (!result.hotspot) {
      result.hotspot = {
        x: 0.5,
        y: 0.5,
        height: 1.0,
        width: 1.0
      };
    }

    return result;
  }

  var SPEC_NAME_TO_URL_NAME_MAPPINGS = [['width', 'w'], ['height', 'h'], ['format', 'fm'], ['download', 'dl'], ['blur', 'blur'], ['sharpen', 'sharp'], ['invert', 'invert'], ['orientation', 'or'], ['minHeight', 'min-h'], ['maxHeight', 'max-h'], ['minWidth', 'min-w'], ['maxWidth', 'max-w'], ['quality', 'q'], ['fit', 'fit'], ['crop', 'crop'], ['saturation', 'sat'], ['auto', 'auto'], ['dpr', 'dpr']];
  function urlForImage(options) {
    var spec = Object.assign({}, (options || {}));
    var source = spec.source;
    delete spec.source;
    var image = parseSource(source);

    if (!image) {
      return null;
    }

    var id = image.asset._ref || image.asset._id || '';
    var asset = parseAssetId(id); // Compute crop rect in terms of pixel coordinates in the raw source image

    var cropLeft = Math.round(image.crop.left * asset.width);
    var cropTop = Math.round(image.crop.top * asset.height);
    var crop = {
      left: cropLeft,
      top: cropTop,
      width: Math.round(asset.width - image.crop.right * asset.width - cropLeft),
      height: Math.round(asset.height - image.crop.bottom * asset.height - cropTop)
    }; // Compute hot spot rect in terms of pixel coordinates

    var hotSpotVerticalRadius = image.hotspot.height * asset.height / 2;
    var hotSpotHorizontalRadius = image.hotspot.width * asset.width / 2;
    var hotSpotCenterX = image.hotspot.x * asset.width;
    var hotSpotCenterY = image.hotspot.y * asset.height;
    var hotspot = {
      left: hotSpotCenterX - hotSpotHorizontalRadius,
      top: hotSpotCenterY - hotSpotVerticalRadius,
      right: hotSpotCenterX + hotSpotHorizontalRadius,
      bottom: hotSpotCenterY + hotSpotVerticalRadius
    }; // If irrelevant, or if we are requested to: don't perform crop/fit based on
    // the crop/hotspot.

    if (!(spec.rect || spec.focalPoint || spec.ignoreImageParams || spec.crop)) {
      spec = Object.assign({}, spec,
        fit({
          crop: crop,
          hotspot: hotspot
        }, spec));
    }

    return specToImageUrl(Object.assign({}, spec,
      {asset: asset}));
  } // eslint-disable-next-line complexity

  function specToImageUrl(spec) {
    var cdnUrl = spec.baseUrl || 'https://cdn.sanity.io';
    var filename = (spec.asset.id) + "-" + (spec.asset.width) + "x" + (spec.asset.height) + "." + (spec.asset.format);
    var baseUrl = cdnUrl + "/images/" + (spec.projectId) + "/" + (spec.dataset) + "/" + filename;
    var params = [];

    if (spec.rect) {
      // Only bother url with a crop if it actually crops anything
      var ref = spec.rect;
      var left = ref.left;
      var top = ref.top;
      var width = ref.width;
      var height = ref.height;
      var isEffectiveCrop = left !== 0 || top !== 0 || height !== spec.asset.height || width !== spec.asset.width;

      if (isEffectiveCrop) {
        params.push(("rect=" + left + "," + top + "," + width + "," + height));
      }
    }

    if (spec.bg) {
      params.push(("bg=" + (spec.bg)));
    }

    if (spec.focalPoint) {
      params.push(("fp-x=" + (spec.focalPoint.x)));
      params.push(("fp-y=" + (spec.focalPoint.y)));
    }

    var flip = [spec.flipHorizontal && 'h', spec.flipVertical && 'v'].filter(Boolean).join('');

    if (flip) {
      params.push(("flip=" + flip));
    } // Map from spec name to url param name, and allow using the actual param name as an alternative


    SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach(function (mapping) {
      var specName = mapping[0];
      var param = mapping[1];

      if (typeof spec[specName] !== 'undefined') {
        params.push((param + "=" + (encodeURIComponent(spec[specName]))));
      } else if (typeof spec[param] !== 'undefined') {
        params.push((param + "=" + (encodeURIComponent(spec[param]))));
      }
    });

    if (params.length === 0) {
      return baseUrl;
    }

    return (baseUrl + "?" + (params.join('&')));
  }

  function fit(source, spec) {
    var cropRect;
    var imgWidth = spec.width;
    var imgHeight = spec.height; // If we are not constraining the aspect ratio, we'll just use the whole crop

    if (!(imgWidth && imgHeight)) {
      return {
        width: imgWidth,
        height: imgHeight,
        rect: source.crop
      };
    }

    var crop = source.crop;
    var hotspot = source.hotspot; // If we are here, that means aspect ratio is locked and fitting will be a bit harder

    var desiredAspectRatio = imgWidth / imgHeight;
    var cropAspectRatio = crop.width / crop.height;

    if (cropAspectRatio > desiredAspectRatio) {
      // The crop is wider than the desired aspect ratio. That means we are cutting from the sides
      var height = crop.height;
      var width = height * desiredAspectRatio;
      var top = crop.top; // Center output horizontally over hotspot

      var hotspotXCenter = (hotspot.right - hotspot.left) / 2 + hotspot.left;
      var left = hotspotXCenter - width / 2; // Keep output within crop

      if (left < crop.left) {
        left = crop.left;
      } else if (left + width > crop.left + crop.width) {
        left = crop.left + crop.width - width;
      }

      cropRect = {
        left: Math.round(left),
        top: Math.round(top),
        width: Math.round(width),
        height: Math.round(height)
      };
    } else {
      // The crop is taller than the desired ratio, we are cutting from top and bottom
      var width$1 = crop.width;
      var height$1 = width$1 / desiredAspectRatio;
      var left$1 = crop.left; // Center output vertically over hotspot

      var hotspotYCenter = (hotspot.bottom - hotspot.top) / 2 + hotspot.top;
      var top$1 = hotspotYCenter - height$1 / 2; // Keep output rect within crop

      if (top$1 < crop.top) {
        top$1 = crop.top;
      } else if (top$1 + height$1 > crop.top + crop.height) {
        top$1 = crop.top + crop.height - height$1;
      }

      cropRect = {
        left: Math.max(0, Math.floor(left$1)),
        top: Math.max(0, Math.floor(top$1)),
        width: Math.round(width$1),
        height: Math.round(height$1)
      };
    }

    return {
      width: imgWidth,
      height: imgHeight,
      rect: cropRect
    };
  } // For backwards-compatibility

  var validFits = ['clip', 'crop', 'fill', 'fillmax', 'max', 'scale', 'min'];
  var validCrops = ['top', 'bottom', 'left', 'right', 'center', 'focalpoint', 'entropy'];
  var validAutoModes = ['format'];

  function isSanityClient(client) {
    return client ? typeof client.clientConfig === 'object' : false;
  }

  function rewriteSpecName(key) {
    var specs = SPEC_NAME_TO_URL_NAME_MAPPINGS;

    for (var i = 0, list = specs; i < list.length; i += 1) {
      var entry = list[i];

      var specName = entry[0];
      var param = entry[1];

      if (key === specName || key === param) {
        return specName;
      }
    }

    return key;
  }

  function urlBuilder(options) {
    // Did we get a SanityClient?
    var client = options;

    if (isSanityClient(client)) {
      // Inherit config from client
      var ref = client.clientConfig;
      var apiHost = ref.apiHost;
      var projectId = ref.projectId;
      var dataset = ref.dataset;
      return new ImageUrlBuilder(null, {
        baseUrl: apiHost.replace(/^https:\/\/api\./, 'https://cdn.'),
        projectId: projectId,
        dataset: dataset
      });
    } // Or just accept the options as given


    return new ImageUrlBuilder(null, options);
  }
  var ImageUrlBuilder = function ImageUrlBuilder(parent, options) {
    this.options = parent ? Object.assign({}, (parent.options || {}),
      (options || {})) // Merge parent options
    : Object.assign({}, (options || {})); // Copy options
  };

  ImageUrlBuilder.prototype.withOptions = function withOptions (options) {
    var baseUrl = options.baseUrl || '';
    var newOptions = {
      baseUrl: baseUrl
    };

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        var specKey = rewriteSpecName(key);
        newOptions[specKey] = options[key];
      }
    }

    return new ImageUrlBuilder(this, Object.assign({}, {baseUrl: baseUrl},
      newOptions));
  }; // The image to be represented. Accepts a Sanity 'image'-document, 'asset'-document or
  // _id of asset. To get the benefit of automatic hot-spot/crop integration with the content
  // studio, the 'image'-document must be provided.


  ImageUrlBuilder.prototype.image = function image (source) {
    return this.withOptions({
      source: source
    });
  }; // Specify the dataset


  ImageUrlBuilder.prototype.dataset = function dataset (dataset$1) {
    return this.withOptions({
      dataset: dataset$1
    });
  }; // Specify the projectId


  ImageUrlBuilder.prototype.projectId = function projectId (projectId$1) {
    return this.withOptions({
      projectId: projectId$1
    });
  }; // Specify background color


  ImageUrlBuilder.prototype.bg = function bg (bg$1) {
    return this.withOptions({
      bg: bg$1
    });
  }; // Set DPR scaling factor


  ImageUrlBuilder.prototype.dpr = function dpr (dpr$1) {
    return this.withOptions({
      dpr: dpr$1
    });
  }; // Specify the width of the image in pixels


  ImageUrlBuilder.prototype.width = function width (width$1) {
    return this.withOptions({
      width: width$1
    });
  }; // Specify the height of the image in pixels


  ImageUrlBuilder.prototype.height = function height (height$1) {
    return this.withOptions({
      height: height$1
    });
  }; // Specify focal point in fraction of image dimensions. Each component 0.0-1.0


  ImageUrlBuilder.prototype.focalPoint = function focalPoint (x, y) {
    return this.withOptions({
      focalPoint: {
        x: x,
        y: y
      }
    });
  };

  ImageUrlBuilder.prototype.maxWidth = function maxWidth (maxWidth$1) {
    return this.withOptions({
      maxWidth: maxWidth$1
    });
  };

  ImageUrlBuilder.prototype.minWidth = function minWidth (minWidth$1) {
    return this.withOptions({
      minWidth: minWidth$1
    });
  };

  ImageUrlBuilder.prototype.maxHeight = function maxHeight (maxHeight$1) {
    return this.withOptions({
      maxHeight: maxHeight$1
    });
  };

  ImageUrlBuilder.prototype.minHeight = function minHeight (minHeight$1) {
    return this.withOptions({
      minHeight: minHeight$1
    });
  }; // Specify width and height in pixels


  ImageUrlBuilder.prototype.size = function size (width, height) {
    return this.withOptions({
      width: width,
      height: height
    });
  }; // Specify blur between 0 and 100


  ImageUrlBuilder.prototype.blur = function blur (blur$1) {
    return this.withOptions({
      blur: blur$1
    });
  };

  ImageUrlBuilder.prototype.sharpen = function sharpen (sharpen$1) {
    return this.withOptions({
      sharpen: sharpen$1
    });
  }; // Specify the desired rectangle of the image


  ImageUrlBuilder.prototype.rect = function rect (left, top, width, height) {
    return this.withOptions({
      rect: {
        left: left,
        top: top,
        width: width,
        height: height
      }
    });
  }; // Specify the image format of the image. 'jpg', 'pjpg', 'png', 'webp'


  ImageUrlBuilder.prototype.format = function format (format$1) {
    return this.withOptions({
      format: format$1
    });
  };

  ImageUrlBuilder.prototype.invert = function invert (invert$1) {
    return this.withOptions({
      invert: invert$1
    });
  }; // Rotation in degrees 0, 90, 180, 270


  ImageUrlBuilder.prototype.orientation = function orientation (orientation$1) {
    return this.withOptions({
      orientation: orientation$1
    });
  }; // Compression quality 0-100


  ImageUrlBuilder.prototype.quality = function quality (quality$1) {
    return this.withOptions({
      quality: quality$1
    });
  }; // Make it a download link. Parameter is default filename.


  ImageUrlBuilder.prototype.forceDownload = function forceDownload (download) {
    return this.withOptions({
      download: download
    });
  }; // Flip image horizontally


  ImageUrlBuilder.prototype.flipHorizontal = function flipHorizontal () {
    return this.withOptions({
      flipHorizontal: true
    });
  }; // Flip image verically


  ImageUrlBuilder.prototype.flipVertical = function flipVertical () {
    return this.withOptions({
      flipVertical: true
    });
  }; // Ignore crop/hotspot from image record, even when present


  ImageUrlBuilder.prototype.ignoreImageParams = function ignoreImageParams () {
    return this.withOptions({
      ignoreImageParams: true
    });
  };

  ImageUrlBuilder.prototype.fit = function fit (value) {
    if (validFits.indexOf(value) === -1) {
      throw new Error(("Invalid fit mode \"" + value + "\""));
    }

    return this.withOptions({
      fit: value
    });
  };

  ImageUrlBuilder.prototype.crop = function crop (value) {
    if (validCrops.indexOf(value) === -1) {
      throw new Error(("Invalid crop mode \"" + value + "\""));
    }

    return this.withOptions({
      crop: value
    });
  }; // Saturation


  ImageUrlBuilder.prototype.saturation = function saturation (saturation$1) {
    return this.withOptions({
      saturation: saturation$1
    });
  };

  ImageUrlBuilder.prototype.auto = function auto (value) {
    if (validAutoModes.indexOf(value) === -1) {
      throw new Error(("Invalid auto mode \"" + value + "\""));
    }

    return this.withOptions({
      auto: value
    });
  }; // Gets the url based on the submitted parameters


  ImageUrlBuilder.prototype.url = function url () {
    return urlForImage(this.options);
  }; // Synonym for url()


  ImageUrlBuilder.prototype.toString = function toString () {
    return this.url();
  };

  return urlBuilder;

})));
//# sourceMappingURL=image-url.umd.js.map


/***/ }),

/***/ "./node_modules/@sanity/observable/lib/SanityObservableMinimal.js":
/*!************************************************************************!*\
  !*** ./node_modules/@sanity/observable/lib/SanityObservableMinimal.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js"),
    Observable = _require.Observable;

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var _require2 = __webpack_require__(/*! ../operators/map */ "./node_modules/@sanity/observable/operators/map.js"),
    map = _require2.map;

var _require3 = __webpack_require__(/*! ../operators/filter */ "./node_modules/@sanity/observable/operators/filter.js"),
    filter = _require3.filter;

var _require4 = __webpack_require__(/*! ../operators/reduce */ "./node_modules/@sanity/observable/operators/reduce.js"),
    reduce = _require4.reduce;
/*
 A minimal rxjs based observable that align as closely as possible with the current es-observable spec,
 without the static factory methods
 */


function SanityObservableMinimal() {
  Observable.apply(this, arguments); // eslint-disable-line prefer-rest-params
}

SanityObservableMinimal.prototype = Object.create(assign(Object.create(null), Observable.prototype));
Object.defineProperty(SanityObservableMinimal.prototype, 'constructor', {
  value: SanityObservableMinimal,
  enumerable: false,
  writable: true,
  configurable: true
});

SanityObservableMinimal.prototype.lift = function lift(operator) {
  var observable = new SanityObservableMinimal();
  observable.source = this;
  observable.operator = operator;
  return observable;
};

function createDeprecatedMemberOp(name, op) {
  var hasWarned = false;
  return function deprecatedOperator() {
    if (!hasWarned) {
      hasWarned = true;
      console.warn(new Error("Calling observable.".concat(name, "(...) is deprecated. Please use observable.pipe(").concat(name, "(...)) instead")));
    }

    return this.pipe(op.apply(this, arguments));
  };
}

SanityObservableMinimal.prototype.map = createDeprecatedMemberOp('map', map);
SanityObservableMinimal.prototype.filter = createDeprecatedMemberOp('filter', filter);
SanityObservableMinimal.prototype.reduce = createDeprecatedMemberOp('filter', reduce);
module.exports = SanityObservableMinimal;

/***/ }),

/***/ "./node_modules/@sanity/observable/minimal.js":
/*!****************************************************!*\
  !*** ./node_modules/@sanity/observable/minimal.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/SanityObservableMinimal */ "./node_modules/@sanity/observable/lib/SanityObservableMinimal.js")


/***/ }),

/***/ "./node_modules/@sanity/observable/operators/filter.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sanity/observable/operators/filter.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.filter = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js").filter


/***/ }),

/***/ "./node_modules/@sanity/observable/operators/map.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sanity/observable/operators/map.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.map = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js").map


/***/ }),

/***/ "./node_modules/@sanity/observable/operators/reduce.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sanity/observable/operators/reduce.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.reduce = __webpack_require__(/*! rxjs/internal/operators/reduce */ "./node_modules/rxjs/internal/operators/reduce.js").reduce


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-properties.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-properties */ "./node_modules/core-js/library/modules/es6.object.define-properties.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/freeze.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/freeze.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.freeze */ "./node_modules/core-js/library/modules/es6.object.freeze.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.freeze;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-properties.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.freeze.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.freeze.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/deep-assign/index.js":
/*!*******************************************!*\
  !*** ./node_modules/deep-assign/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObj = __webpack_require__(/*! is-obj */ "./node_modules/deep-assign/node_modules/is-obj/index.js");
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Sources cannot be null or undefined');
	}

	return Object(val);
}

function assignKey(to, from, key) {
	var val = from[key];

	if (val === undefined || val === null) {
		return;
	}

	if (hasOwnProperty.call(to, key)) {
		if (to[key] === undefined || to[key] === null) {
			throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
		}
	}

	if (!hasOwnProperty.call(to, key) || !isObj(val)) {
		to[key] = val;
	} else {
		to[key] = assign(Object(to[key]), from[key]);
	}
}

function assign(to, from) {
	if (to === from) {
		return to;
	}

	from = Object(from);

	for (var key in from) {
		if (hasOwnProperty.call(from, key)) {
			assignKey(to, from, key);
		}
	}

	if (Object.getOwnPropertySymbols) {
		var symbols = Object.getOwnPropertySymbols(from);

		for (var i = 0; i < symbols.length; i++) {
			if (propIsEnumerable.call(from, symbols[i])) {
				assignKey(to, from, symbols[i]);
			}
		}
	}

	return to;
}

module.exports = function deepAssign(target) {
	target = toObject(target);

	for (var s = 1; s < arguments.length; s++) {
		assign(target, arguments[s]);
	}

	return target;
};


/***/ }),

/***/ "./node_modules/deep-assign/node_modules/is-obj/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/deep-assign/node_modules/is-obj/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (x) {
	var type = typeof x;
	return x !== null && (type === 'object' || type === 'function');
};


/***/ }),

/***/ "./node_modules/eventsource-polyfill/dist/eventsource.js":
/*!***************************************************************!*\
  !*** ./node_modules/eventsource-polyfill/dist/eventsource.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
   * EventSource polyfill version 0.9.6
   * Supported by sc AmvTek srl
   * :email: devel@amvtek.com
 */
;(function (global) {

    if (global.EventSource && !global._eventSourceImportPrefix){
        return;
    }

    var evsImportName = (global._eventSourceImportPrefix||'')+"EventSource";

    var EventSource = function (url, options) {

        if (!url || typeof url != 'string') {
            throw new SyntaxError('Not enough arguments');
        }

        this.URL = url;
        this.setOptions(options);
        var evs = this;
        setTimeout(function(){evs.poll()}, 0);
    };

    EventSource.prototype = {

        CONNECTING: 0,

        OPEN: 1,

        CLOSED: 2,

        defaultOptions: {

            loggingEnabled: false,

            loggingPrefix: "eventsource",

            interval: 500, // milliseconds

            bufferSizeLimit: 256*1024, // bytes

            silentTimeout: 300000, // milliseconds

            getArgs:{
                'evs_buffer_size_limit': 256*1024
            },

            xhrHeaders:{
                'Accept': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'X-Requested-With': 'XMLHttpRequest'
            }
        },

        setOptions: function(options){

            var defaults = this.defaultOptions;
            var option;

            // set all default options...
            for (option in defaults){

                if ( defaults.hasOwnProperty(option) ){
                    this[option] = defaults[option];
                }
            }

            // override with what is in options
            for (option in options){

                if (option in defaults && options.hasOwnProperty(option)){
                    this[option] = options[option];
                }
            }

            // if getArgs option is enabled
            // ensure evs_buffer_size_limit corresponds to bufferSizeLimit
            if (this.getArgs && this.bufferSizeLimit) {

                this.getArgs['evs_buffer_size_limit'] = this.bufferSizeLimit;
            }

            // if console is not available, force loggingEnabled to false
            if (typeof console === "undefined" || typeof console.log === "undefined") {

                this.loggingEnabled = false;
            }
        },

        log: function(message) {

            if (this.loggingEnabled) {

                console.log("[" + this.loggingPrefix +"]:" + message)
            }
        },

        poll: function() {

            try {

                if (this.readyState == this.CLOSED) {
                    return;
                }

                this.cleanup();
                this.readyState = this.CONNECTING;
                this.cursor = 0;
                this.cache = '';
                this._xhr = new this.XHR(this);
                this.resetNoActivityTimer();

            }
            catch (e) {

                // in an attempt to silence the errors
                this.log('There were errors inside the pool try-catch');
                this.dispatchEvent('error', { type: 'error', data: e.message });
            }
        },

        pollAgain: function (interval) {

            // schedule poll to be called after interval milliseconds
            var evs = this;
            evs.readyState = evs.CONNECTING;
            evs.dispatchEvent('error', {
                type: 'error',
                data: "Reconnecting "
            });
            this._pollTimer = setTimeout(function(){evs.poll()}, interval||0);
        },


        cleanup: function() {

            this.log('evs cleaning up')

            if (this._pollTimer){
                clearInterval(this._pollTimer);
                this._pollTimer = null;
            }

            if (this._noActivityTimer){
                clearInterval(this._noActivityTimer);
                this._noActivityTimer = null;
            }

            if (this._xhr){
                this._xhr.abort();
                this._xhr = null;
            }
        },

        resetNoActivityTimer: function(){

            if (this.silentTimeout){

                if (this._noActivityTimer){
                    clearInterval(this._noActivityTimer);
                }
                var evs = this;
                this._noActivityTimer = setTimeout(
                        function(){ evs.log('Timeout! silentTImeout:'+evs.silentTimeout); evs.pollAgain(); },
                        this.silentTimeout
                        );
            }
        },

        close: function () {

            this.readyState = this.CLOSED;
            this.log('Closing connection. readyState: '+this.readyState);
            this.cleanup();
        },

        ondata: function() {

            var request = this._xhr;

            if (request.isReady() && !request.hasError() ) {
                // reset the timer, as we have activity
                this.resetNoActivityTimer();

                // move this EventSource to OPEN state...
                if (this.readyState == this.CONNECTING) {
                    this.readyState = this.OPEN;
                    this.dispatchEvent('open', { type: 'open' });
                }

                var buffer = request.getBuffer();

                if (buffer.length > this.bufferSizeLimit) {
                    this.log('buffer.length > this.bufferSizeLimit');
                    this.pollAgain();
                }

                if (this.cursor == 0 && buffer.length > 0){

                    // skip byte order mark \uFEFF character if it starts the stream
                    if (buffer.substring(0,1) == '\uFEFF'){
                        this.cursor = 1;
                    }
                }

                var lastMessageIndex = this.lastMessageIndex(buffer);
                if (lastMessageIndex[0] >= this.cursor){

                    var newcursor = lastMessageIndex[1];
                    var toparse = buffer.substring(this.cursor, newcursor);
                    this.parseStream(toparse);
                    this.cursor = newcursor;
                }

                // if request is finished, reopen the connection
                if (request.isDone()) {
                    this.log('request.isDone(). reopening the connection');
                    this.pollAgain(this.interval);
                }
            }
            else if (this.readyState !== this.CLOSED) {

                this.log('this.readyState !== this.CLOSED');
                this.pollAgain(this.interval);

                //MV: Unsure why an error was previously dispatched
            }
        },

        parseStream: function(chunk) {

            // normalize line separators (\r\n,\r,\n) to \n
            // remove white spaces that may precede \n
            chunk = this.cache + this.normalizeToLF(chunk);

            var events = chunk.split('\n\n');

            var i, j, eventType, datas, line, retry;

            for (i=0; i < (events.length - 1); i++) {

                eventType = 'message';
                datas = [];
                parts = events[i].split('\n');

                for (j=0; j < parts.length; j++) {

                    line = this.trimWhiteSpace(parts[j]);

                    if (line.indexOf('event') == 0) {

                        eventType = line.replace(/event:?\s*/, '');
                    }
                    else if (line.indexOf('retry') == 0) {

                        retry = parseInt(line.replace(/retry:?\s*/, ''));
                        if(!isNaN(retry)) {
                            this.interval = retry;
                        }
                    }
                    else if (line.indexOf('data') == 0) {

                        datas.push(line.replace(/data:?\s*/, ''));
                    }
                    else if (line.indexOf('id:') == 0) {

                        this.lastEventId = line.replace(/id:?\s*/, '');
                    }
                    else if (line.indexOf('id') == 0) { // this resets the id

                        this.lastEventId = null;
                    }
                }

                if (datas.length) {
                    // dispatch a new event
                    var event = new MessageEvent(eventType, datas.join('\n'), window.location.origin, this.lastEventId);
                    this.dispatchEvent(eventType, event);
                }
            }

            this.cache = events[events.length - 1];
        },

        dispatchEvent: function (type, event) {
            var handlers = this['_' + type + 'Handlers'];

            if (handlers) {

                for (var i = 0; i < handlers.length; i++) {
                    handlers[i].call(this, event);
                }
            }

            if (this['on' + type]) {
                this['on' + type].call(this, event);
            }

        },

        addEventListener: function (type, handler) {
            if (!this['_' + type + 'Handlers']) {
                this['_' + type + 'Handlers'] = [];
            }

            this['_' + type + 'Handlers'].push(handler);
        },

        removeEventListener: function (type, handler) {
            var handlers = this['_' + type + 'Handlers'];
            if (!handlers) {
                return;
            }
            for (var i = handlers.length - 1; i >= 0; --i) {
                if (handlers[i] === handler) {
                    handlers.splice(i, 1);
                    break;
                }
            }
        },

        _pollTimer: null,

        _noactivityTimer: null,

        _xhr: null,

        lastEventId: null,

        cache: '',

        cursor: 0,

        onerror: null,

        onmessage: null,

        onopen: null,

        readyState: 0,

        // ===================================================================
        // helpers functions
        // those are attached to prototype to ease reuse and testing...

        urlWithParams: function (baseURL, params) {

            var encodedArgs = [];

            if (params){

                var key, urlarg;
                var urlize = encodeURIComponent;

                for (key in params){
                    if (params.hasOwnProperty(key)) {
                        urlarg = urlize(key)+'='+urlize(params[key]);
                        encodedArgs.push(urlarg);
                    }
                }
            }

            if (encodedArgs.length > 0){

                if (baseURL.indexOf('?') == -1)
                    return baseURL + '?' + encodedArgs.join('&');
                return baseURL + '&' + encodedArgs.join('&');
            }
            return baseURL;
        },

        lastMessageIndex: function(text) {

            var ln2 =text.lastIndexOf('\n\n');
            var lr2 = text.lastIndexOf('\r\r');
            var lrln2 = text.lastIndexOf('\r\n\r\n');

            if (lrln2 > Math.max(ln2, lr2)) {
                return [lrln2, lrln2+4];
            }
            return [Math.max(ln2, lr2), Math.max(ln2, lr2) + 2]
        },

        trimWhiteSpace: function(str) {
            // to remove whitespaces left and right of string

            var reTrim = /^(\s|\u00A0)+|(\s|\u00A0)+$/g;
            return str.replace(reTrim, '');
        },

        normalizeToLF: function(str) {

            // replace \r and \r\n with \n
            return str.replace(/\r\n|\r/g, '\n');
        }

    };

    if (!isOldIE()){

        EventSource.isPolyfill = "XHR";

        // EventSource will send request using XMLHttpRequest
        EventSource.prototype.XHR = function(evs) {

            request = new XMLHttpRequest();
            this._request = request;
            evs._xhr = this;

            // set handlers
            request.onreadystatechange = function(){
                if (request.readyState > 1 && evs.readyState != evs.CLOSED) {
                    if (request.status == 200 || (request.status>=300 && request.status<400)){
                        evs.ondata();
                    }
                    else {
                        request._failed = true;
                        evs.readyState = evs.CLOSED;
                        evs.dispatchEvent('error', {
                            type: 'error',
                            data: "The server responded with "+request.status
                        });
                        evs.close();
                    }
                }
            };

            request.onprogress = function () {
            };

            request.open('GET', evs.urlWithParams(evs.URL, evs.getArgs), true);

            var headers = evs.xhrHeaders; // maybe null
            for (var header in headers) {
                if (headers.hasOwnProperty(header)){
                    request.setRequestHeader(header, headers[header]);
                }
            }
            if (evs.lastEventId) {
                request.setRequestHeader('Last-Event-Id', evs.lastEventId);
            }

            request.send();
        };

        EventSource.prototype.XHR.prototype = {

            useXDomainRequest: false,

            _request: null,

            _failed: false, // true if we have had errors...

            isReady: function() {


                return this._request.readyState >= 2;
            },

            isDone: function() {

                return (this._request.readyState == 4);
            },

            hasError: function() {

                return (this._failed || (this._request.status >= 400));
            },

            getBuffer: function() {

                var rv = '';
                try {
                    rv = this._request.responseText || '';
                }
                catch (e){}
                return rv;
            },

            abort: function() {

                if ( this._request ) {
                    this._request.abort();
                }
            }
        };
    }
    else {

	EventSource.isPolyfill = "IE_8-9";

        // patch EventSource defaultOptions
        var defaults = EventSource.prototype.defaultOptions;
        defaults.xhrHeaders = null; // no headers will be sent
        defaults.getArgs['evs_preamble'] = 2048 + 8;

        // EventSource will send request using Internet Explorer XDomainRequest
        EventSource.prototype.XHR = function(evs) {

            request = new XDomainRequest();
            this._request = request;

            // set handlers
            request.onprogress = function(){
                request._ready = true;
                evs.ondata();
            };

            request.onload = function(){
                this._loaded = true;
                evs.ondata();
            };

            request.onerror = function(){
                this._failed = true;
                evs.readyState = evs.CLOSED;
                evs.dispatchEvent('error', {
                    type: 'error',
                    data: "XDomainRequest error"
                });
            };

            request.ontimeout = function(){
                this._failed = true;
                evs.readyState = evs.CLOSED;
                evs.dispatchEvent('error', {
                    type: 'error',
                    data: "XDomainRequest timed out"
                });
            };

            // XDomainRequest does not allow setting custom headers
            // If EventSource has enabled the use of GET arguments
            // we add parameters to URL so that server can adapt the stream...
            var reqGetArgs = {};
            if (evs.getArgs) {

                // copy evs.getArgs in reqGetArgs
                var defaultArgs = evs.getArgs;
                    for (var key in defaultArgs) {
                        if (defaultArgs.hasOwnProperty(key)){
                            reqGetArgs[key] = defaultArgs[key];
                        }
                    }
                if (evs.lastEventId){
                    reqGetArgs['evs_last_event_id'] = evs.lastEventId;
                }
            }
            // send the request

            request.open('GET', evs.urlWithParams(evs.URL,reqGetArgs));
            request.send();
        };

        EventSource.prototype.XHR.prototype = {

            useXDomainRequest: true,

            _request: null,

            _ready: false, // true when progress events are dispatched

            _loaded: false, // true when request has been loaded

            _failed: false, // true if when request is in error

            isReady: function() {

                return this._request._ready;
            },

            isDone: function() {

                return this._request._loaded;
            },

            hasError: function() {

                return this._request._failed;
            },

            getBuffer: function() {

                var rv = '';
                try {
                    rv = this._request.responseText || '';
                }
                catch (e){}
                return rv;
            },

            abort: function() {

                if ( this._request){
                    this._request.abort();
                }
            }
        };
    }

    function MessageEvent(type, data, origin, lastEventId) {

        this.bubbles = false;
        this.cancelBubble = false;
        this.cancelable = false;
        this.data = data || null;
        this.origin = origin || '';
        this.lastEventId = lastEventId || '';
        this.type = type || 'message';
    }

    function isOldIE () {

        //return true if we are in IE8 or IE9
        return (window.XDomainRequest && (window.XMLHttpRequest && new XMLHttpRequest().responseType === undefined)) ? true : false;
    }

    global[evsImportName] = EventSource;
})(this);


/***/ }),

/***/ "./node_modules/get-it/index.js":
/*!**************************************!*\
  !*** ./node_modules/get-it/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib-node */ "./node_modules/get-it/lib/index.js")


/***/ }),

/***/ "./node_modules/get-it/lib/index.js":
/*!******************************************!*\
  !*** ./node_modules/get-it/lib/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pubsub = __webpack_require__(/*! nano-pubsub */ "./node_modules/nano-pubsub/index.js");
var middlewareReducer = __webpack_require__(/*! ./util/middlewareReducer */ "./node_modules/get-it/lib/util/middlewareReducer.js");
var processOptions = __webpack_require__(/*! ./middleware/defaultOptionsProcessor */ "./node_modules/get-it/lib/middleware/defaultOptionsProcessor.js");
var validateOptions = __webpack_require__(/*! ./middleware/defaultOptionsValidator */ "./node_modules/get-it/lib/middleware/defaultOptionsValidator.js");
var httpRequest = __webpack_require__(/*! ./request */ "./node_modules/get-it/lib/request/index.js"); // node-request in node, browser-request in browsers

var channelNames = ['request', 'response', 'progress', 'error', 'abort'];
var middlehooks = ['processOptions', 'validateOptions', 'interceptRequest', 'finalizeOptions', 'onRequest', 'onResponse', 'onError', 'onReturn', 'onHeaders'];

module.exports = function createRequester() {
  var initMiddleware = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var loadedMiddleware = [];
  var middleware = middlehooks.reduce(function (ware, name) {
    ware[name] = ware[name] || [];
    return ware;
  }, {
    processOptions: [processOptions],
    validateOptions: [validateOptions]
  });

  function request(opts) {
    var channels = channelNames.reduce(function (target, name) {
      target[name] = pubsub();
      return target;
    }, {});

    // Prepare a middleware reducer that can be reused throughout the lifecycle
    var applyMiddleware = middlewareReducer(middleware);

    // Parse the passed options
    var options = applyMiddleware('processOptions', opts);

    // Validate the options
    applyMiddleware('validateOptions', options);

    // Build a context object we can pass to child handlers
    var context = { options: options, channels: channels, applyMiddleware: applyMiddleware

      // We need to hold a reference to the current, ongoing request,
      // in order to allow cancellation. In the case of the retry middleware,
      // a new request might be triggered
    };var ongoingRequest = null;
    var unsubscribe = channels.request.subscribe(function (ctx) {
      // Let request adapters (node/browser) perform the actual request
      ongoingRequest = httpRequest(ctx, function (err, res) {
        return onResponse(err, res, ctx);
      });
    });

    // If we abort the request, prevent further requests from happening,
    // and be sure to cancel any ongoing request (obviously)
    channels.abort.subscribe(function () {
      unsubscribe();
      if (ongoingRequest) {
        ongoingRequest.abort();
      }
    });

    // See if any middleware wants to modify the return value - for instance
    // the promise or observable middlewares
    var returnValue = applyMiddleware('onReturn', channels, context);

    // If return value has been modified by a middleware, we expect the middleware
    // to publish on the 'request' channel. If it hasn't been modified, we want to
    // trigger it right away
    if (returnValue === channels) {
      channels.request.publish(context);
    }

    return returnValue;

    function onResponse(reqErr, res, ctx) {
      var error = reqErr;
      var response = res;

      // We're processing non-errors first, in case a middleware converts the
      // response into an error (for instance, status >= 400 == HttpError)
      if (!error) {
        try {
          response = applyMiddleware('onResponse', res, ctx);
        } catch (err) {
          response = null;
          error = err;
        }
      }

      // Apply error middleware - if middleware return the same (or a different) error,
      // publish as an error event. If we *don't* return an error, assume it has been handled
      error = error && applyMiddleware('onError', error, ctx);

      // Figure out if we should publish on error/response channels
      if (error) {
        channels.error.publish(error);
      } else if (response) {
        channels.response.publish(response);
      }
    }
  }

  request.use = function use(newMiddleware) {
    if (!newMiddleware) {
      throw new Error('Tried to add middleware that resolved to falsey value');
    }

    if (typeof newMiddleware === 'function') {
      throw new Error('Tried to add middleware that was a function. It probably expects you to pass options to it.');
    }

    if (newMiddleware.onReturn && middleware.onReturn.length > 0) {
      throw new Error('Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event');
    }

    middlehooks.forEach(function (key) {
      if (newMiddleware[key]) {
        middleware[key].push(newMiddleware[key]);
      }
    });

    loadedMiddleware.push(newMiddleware);
    return request;
  };

  request.clone = function clone() {
    return createRequester(loadedMiddleware);
  };

  initMiddleware.forEach(request.use);

  return request;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/defaultOptionsProcessor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/defaultOptionsProcessor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var urlParse = __webpack_require__(/*! url-parse */ "./node_modules/url-parse/index.js");

var isReactNative = typeof navigator === 'undefined' ? false : navigator.product === 'ReactNative';

var has = Object.prototype.hasOwnProperty;
var defaultOptions = { timeout: isReactNative ? 60000 : 120000 };

module.exports = function (opts) {
  var options = typeof opts === 'string' ? objectAssign({ url: opts }, defaultOptions) : objectAssign({}, defaultOptions, opts);

  // Parse URL into parts
  var url = urlParse(options.url, {}, // Don't use current browser location
  true // Parse query strings
  );

  // Normalize timeouts
  options.timeout = normalizeTimeout(options.timeout);

  // Shallow-merge (override) existing query params
  if (options.query) {
    url.query = objectAssign({}, url.query, removeUndefined(options.query));
  }

  // Implicit POST if we have not specified a method but have a body
  options.method = options.body && !options.method ? 'POST' : (options.method || 'GET').toUpperCase();

  // Stringify URL
  options.url = url.toString(stringifyQueryString);

  return options;
};

function stringifyQueryString(obj) {
  var pairs = [];
  for (var key in obj) {
    if (has.call(obj, key)) {
      push(key, obj[key]);
    }
  }

  return pairs.length ? pairs.join('&') : '';

  function push(key, val) {
    if (Array.isArray(val)) {
      val.forEach(function (item) {
        return push(key, item);
      });
    } else {
      pairs.push([key, val].map(encodeURIComponent).join('='));
    }
  }
}

function normalizeTimeout(time) {
  if (time === false || time === 0) {
    return false;
  }

  if (time.connect || time.socket) {
    return time;
  }

  var delay = Number(time);
  if (isNaN(delay)) {
    return normalizeTimeout(defaultOptions.timeout);
  }

  return { connect: delay, socket: delay };
}

function removeUndefined(obj) {
  var target = {};
  for (var key in obj) {
    if (obj[key] !== undefined) {
      target[key] = obj[key];
    }
  }
  return target;
}
//# sourceMappingURL=defaultOptionsProcessor.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/defaultOptionsValidator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/defaultOptionsValidator.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var validUrl = /^https?:\/\//i;

module.exports = function (options) {
  if (!validUrl.test(options.url)) {
    throw new Error("\"" + options.url + "\" is not a valid URL");
  }
};
//# sourceMappingURL=defaultOptionsValidator.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/jsonRequest.js":
/*!***********************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/jsonRequest.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var isPlainObject = __webpack_require__(/*! is-plain-object */ "./node_modules/is-plain-object/index.js");

var serializeTypes = ['boolean', 'string', 'number'];
var isBuffer = function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
};

module.exports = function () {
  return {
    processOptions: function processOptions(options) {
      var body = options.body;
      if (!body) {
        return options;
      }

      var isStream = typeof body.pipe === 'function';
      var shouldSerialize = !isStream && !isBuffer(body) && (serializeTypes.indexOf(typeof body === 'undefined' ? 'undefined' : _typeof(body)) !== -1 || Array.isArray(body) || isPlainObject(body));

      if (!shouldSerialize) {
        return options;
      }

      return objectAssign({}, options, {
        body: JSON.stringify(options.body),
        headers: objectAssign({}, options.headers, {
          'Content-Type': 'application/json'
        })
      });
    }
  };
};
//# sourceMappingURL=jsonRequest.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/jsonResponse.js":
/*!************************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/jsonResponse.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

module.exports = function (opts) {
  return {
    onResponse: function onResponse(response) {
      var contentType = response.headers['content-type'] || '';
      var shouldDecode = opts && opts.force || contentType.indexOf('application/json') !== -1;
      if (!response.body || !contentType || !shouldDecode) {
        return response;
      }

      return objectAssign({}, response, { body: tryParse(response.body) });
    },

    processOptions: function processOptions(options) {
      return objectAssign({}, options, {
        headers: objectAssign({ Accept: 'application/json' }, options.headers)
      });
    }
  };
};

function tryParse(body) {
  try {
    return JSON.parse(body);
  } catch (err) {
    err.message = 'Failed to parsed response body as JSON: ' + err.message;
    throw err;
  }
}
//# sourceMappingURL=jsonResponse.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/observable.js":
/*!**********************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/observable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ../util/global */ "./node_modules/get-it/lib/util/global.js");
var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

module.exports = function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var Observable = opts.implementation || global.Observable;
  if (!Observable) {
    throw new Error('`Observable` is not available in global scope, and no implementation was passed');
  }

  return {
    onReturn: function onReturn(channels, context) {
      return new Observable(function (observer) {
        channels.error.subscribe(function (err) {
          return observer.error(err);
        });
        channels.progress.subscribe(function (event) {
          return observer.next(objectAssign({ type: 'progress' }, event));
        });
        channels.response.subscribe(function (response) {
          observer.next(objectAssign({ type: 'response' }, response));
          observer.complete();
        });

        channels.request.publish(context);
        return function () {
          return channels.abort.publish();
        };
      });
    }
  };
};
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/progress/browser-progress.js":
/*!*************************************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/progress/browser-progress.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return {
    onRequest: function onRequest(evt) {
      if (evt.adapter !== 'xhr') {
        return;
      }

      var xhr = evt.request;
      var context = evt.context;

      if ('upload' in xhr && 'onprogress' in xhr.upload) {
        xhr.upload.onprogress = handleProgress('upload');
      }

      if ('onprogress' in xhr) {
        xhr.onprogress = handleProgress('download');
      }

      function handleProgress(stage) {
        return function (event) {
          var percent = event.lengthComputable ? event.loaded / event.total * 100 : -1;
          context.channels.progress.publish({
            stage: stage,
            percent: percent,
            total: event.total,
            loaded: event.loaded,
            lengthComputable: event.lengthComputable
          });
        };
      }
    }
  };
};
//# sourceMappingURL=browser-progress.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/progress/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/progress/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./node-progress */ "./node_modules/get-it/lib/middleware/progress/browser-progress.js");
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/request/browser-request.js":
/*!************************************************************!*\
  !*** ./node_modules/get-it/lib/request/browser-request.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint max-depth: ["error", 4] */
var sameOrigin = __webpack_require__(/*! same-origin */ "./node_modules/same-origin/index.js");
var parseHeaders = __webpack_require__(/*! parse-headers */ "./node_modules/parse-headers/parse-headers.js");
var noop = function noop() {
  /* intentional noop */
};

var win = window;
var XmlHttpRequest = win.XMLHttpRequest || noop;
var hasXhr2 = 'withCredentials' in new XmlHttpRequest();
var XDomainRequest = hasXhr2 ? XmlHttpRequest : win.XDomainRequest;
var adapter = 'xhr';

module.exports = function (context, callback) {
  var opts = context.options;
  var options = context.applyMiddleware('finalizeOptions', opts);
  var timers = {};

  // Deep-checking window.location because of react native, where `location` doesn't exist
  var cors = win && win.location && !sameOrigin(win.location.href, options.url);

  // Allow middleware to inject a response, for instance in the case of caching or mocking
  var injectedResponse = context.applyMiddleware('interceptRequest', undefined, {
    adapter: adapter,
    context: context
  });

  // If middleware injected a response, treat it as we normally would and return it
  // Do note that the injected response has to be reduced to a cross-environment friendly response
  if (injectedResponse) {
    var cbTimer = setTimeout(callback, 0, null, injectedResponse);
    var cancel = function cancel() {
      return clearTimeout(cbTimer);
    };
    return { abort: cancel };
  }

  // We'll want to null out the request on success/failure
  var xhr = cors ? new XDomainRequest() : new XmlHttpRequest();

  var isXdr = win.XDomainRequest && xhr instanceof win.XDomainRequest;
  var headers = options.headers;

  // Request state
  var aborted = false;
  var loaded = false;
  var timedOut = false;

  // Apply event handlers
  xhr.onerror = onError;
  xhr.ontimeout = onError;
  xhr.onabort = function () {
    aborted = true;
  };

  // IE9 must have onprogress be set to a unique function
  xhr.onprogress = function () {
    /* intentional noop */
  };

  var loadEvent = isXdr ? 'onload' : 'onreadystatechange';
  xhr[loadEvent] = function () {
    // Prevent request from timing out
    resetTimers();

    if (aborted || xhr.readyState !== 4 && !isXdr) {
      return;
    }

    // Will be handled by onError
    if (xhr.status === 0) {
      return;
    }

    onLoad();
  };

  // @todo two last options to open() is username/password
  xhr.open(options.method, options.url, true // Always async
  );

  // Some options need to be applied after open
  xhr.withCredentials = !!options.withCredentials;

  // Set headers
  if (headers && xhr.setRequestHeader) {
    for (var key in headers) {
      if (headers.hasOwnProperty(key)) {
        xhr.setRequestHeader(key, headers[key]);
      }
    }
  } else if (headers && isXdr) {
    throw new Error('Headers cannot be set on an XDomainRequest object');
  }

  if (options.rawBody) {
    xhr.responseType = 'arraybuffer';
  }

  // Let middleware know we're about to do a request
  context.applyMiddleware('onRequest', { options: options, adapter: adapter, request: xhr, context: context });

  xhr.send(options.body || null);

  // Figure out which timeouts to use (if any)
  var delays = options.timeout;
  if (delays) {
    timers.connect = setTimeout(function () {
      return timeoutRequest('ETIMEDOUT');
    }, delays.connect);
  }

  return { abort: abort };

  function abort() {
    aborted = true;

    if (xhr) {
      xhr.abort();
    }
  }

  function timeoutRequest(code) {
    timedOut = true;
    xhr.abort();
    var error = new Error(code === 'ESOCKETTIMEDOUT' ? 'Socket timed out on request to ' + options.url : 'Connection timed out on request to ' + options.url);
    error.code = code;
    context.channels.error.publish(error);
  }

  function resetTimers() {
    if (!delays) {
      return;
    }

    stopTimers();
    timers.socket = setTimeout(function () {
      return timeoutRequest('ESOCKETTIMEDOUT');
    }, delays.socket);
  }

  function stopTimers() {
    // Only clear the connect timeout if we've got a connection
    if (aborted || xhr.readyState >= 2 && timers.connect) {
      clearTimeout(timers.connect);
    }

    if (timers.socket) {
      clearTimeout(timers.socket);
    }
  }

  function onError() {
    if (loaded) {
      return;
    }

    // Clean up
    stopTimers();
    loaded = true;
    xhr = null;

    // Annoyingly, details are extremely scarce and hidden from us.
    // We only really know that it is a network error
    var err = new Error('Network error while attempting to reach ' + options.url);
    err.isNetworkError = true;
    err.request = options;
    callback(err);
  }

  function reduceResponse() {
    var statusCode = xhr.status;
    var statusMessage = xhr.statusText;

    if (isXdr && statusCode === undefined) {
      // IE8 CORS GET successful response doesn't have a status field, but body is fine
      statusCode = 200;
    } else if (statusCode > 12000 && statusCode < 12156) {
      // Yet another IE quirk where it emits weird status codes on network errors
      // https://support.microsoft.com/en-us/kb/193625
      return onError();
    } else {
      // Another IE bug where HTTP 204 somehow ends up as 1223
      statusCode = xhr.status === 1223 ? 204 : xhr.status;
      statusMessage = xhr.status === 1223 ? 'No Content' : statusMessage;
    }

    return {
      body: xhr.response || xhr.responseText,
      url: options.url,
      method: options.method,
      headers: isXdr ? {} : parseHeaders(xhr.getAllResponseHeaders()),
      statusCode: statusCode,
      statusMessage: statusMessage
    };
  }

  function onLoad() {
    if (aborted || loaded || timedOut) {
      return;
    }

    if (xhr.status === 0) {
      onError(new Error('Unknown XHR error'));
      return;
    }

    // Prevent being called twice
    stopTimers();
    loaded = true;
    callback(null, reduceResponse());
  }
};
//# sourceMappingURL=browser-request.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/request/index.js":
/*!**************************************************!*\
  !*** ./node_modules/get-it/lib/request/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./node-request */ "./node_modules/get-it/lib/request/browser-request.js");
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/util/global.js":
/*!************************************************!*\
  !*** ./node_modules/get-it/lib/util/global.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/* eslint-disable no-negated-condition */
if (typeof window !== 'undefined') {
  module.exports = window;
} else if (typeof global !== 'undefined') {
  module.exports = global;
} else if (typeof self !== 'undefined') {
  module.exports = self;
} else {
  module.exports = {};
}
//# sourceMappingURL=global.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/get-it/lib/util/middlewareReducer.js":
/*!***********************************************************!*\
  !*** ./node_modules/get-it/lib/util/middlewareReducer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (middleware) {
  var applyMiddleware = function applyMiddleware(hook, defaultValue) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return middleware[hook].reduce(function (value, handler) {
      return handler.apply(undefined, [value].concat(args));
    }, defaultValue);
  };

  return applyMiddleware;
};
//# sourceMappingURL=middlewareReducer.js.map

/***/ }),

/***/ "./node_modules/groq/lib/groq.js":
/*!***************************************!*\
  !*** ./node_modules/groq/lib/groq.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable import/no-commonjs */
module.exports = function groq(strings) {
  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  var lastIndex = strings.length - 1;
  return strings.slice(0, lastIndex).reduce(function (acc, str, i) {
    return acc + str + keys[i];
  }, '') + strings[lastIndex];
};

/***/ }),

/***/ "./node_modules/is-plain-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),

/***/ "./node_modules/isobject/index.js":
/*!****************************************!*\
  !*** ./node_modules/isobject/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),

/***/ "./node_modules/make-error/index.js":
/*!******************************************!*\
  !*** ./node_modules/make-error/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ISC @ Julien Fontanet



// ===================================================================

var construct = typeof Reflect !== 'undefined' ? Reflect.construct : undefined
var defineProperty = Object.defineProperty

// -------------------------------------------------------------------

var captureStackTrace = Error.captureStackTrace
if (captureStackTrace === undefined) {
  captureStackTrace = function captureStackTrace (error) {
    var container = new Error()

    defineProperty(error, 'stack', {
      configurable: true,
      get: function getStack () {
        var stack = container.stack

        // Replace property with value for faster future accesses.
        defineProperty(this, 'stack', {
          configurable: true,
          value: stack,
          writable: true
        })

        return stack
      },
      set: function setStack (stack) {
        defineProperty(error, 'stack', {
          configurable: true,
          value: stack,
          writable: true
        })
      }
    })
  }
}

// -------------------------------------------------------------------

function BaseError (message) {
  if (message !== undefined) {
    defineProperty(this, 'message', {
      configurable: true,
      value: message,
      writable: true
    })
  }

  var cname = this.constructor.name
  if (
    cname !== undefined &&
    cname !== this.name
  ) {
    defineProperty(this, 'name', {
      configurable: true,
      value: cname,
      writable: true
    })
  }

  captureStackTrace(this, this.constructor)
}

BaseError.prototype = Object.create(Error.prototype, {
  // See: https://github.com/JsCommunity/make-error/issues/4
  constructor: {
    configurable: true,
    value: BaseError,
    writable: true
  }
})

// -------------------------------------------------------------------

// Sets the name of a function if possible (depends of the JS engine).
var setFunctionName = (function () {
  function setFunctionName (fn, name) {
    return defineProperty(fn, 'name', {
      configurable: true,
      value: name
    })
  }
  try {
    var f = function () {}
    setFunctionName(f, 'foo')
    if (f.name === 'foo') {
      return setFunctionName
    }
  } catch (_) {}
})()

// -------------------------------------------------------------------

function makeError (constructor, super_) {
  if (super_ == null || super_ === Error) {
    super_ = BaseError
  } else if (typeof super_ !== 'function') {
    throw new TypeError('super_ should be a function')
  }

  var name
  if (typeof constructor === 'string') {
    name = constructor
    constructor = construct !== undefined
      ? function () { return construct(super_, arguments, this.constructor) }
      : function () { super_.apply(this, arguments) }

    // If the name can be set, do it once and for all.
    if (setFunctionName !== undefined) {
      setFunctionName(constructor, name)
      name = undefined
    }
  } else if (typeof constructor !== 'function') {
    throw new TypeError('constructor should be either a string or a function')
  }

  // Also register the super constructor also as `constructor.super_` just
  // like Node's `util.inherits()`.
  constructor.super_ = constructor['super'] = super_

  var properties = {
    constructor: {
      configurable: true,
      value: constructor,
      writable: true
    }
  }

  // If the name could not be set on the constructor, set it on the
  // prototype.
  if (name !== undefined) {
    properties.name = {
      configurable: true,
      value: name,
      writable: true
    }
  }
  constructor.prototype = Object.create(super_.prototype, properties)

  return constructor
}
exports = module.exports = makeError
exports.BaseError = BaseError


/***/ }),

/***/ "./node_modules/nano-pubsub/index.js":
/*!*******************************************!*\
  !*** ./node_modules/nano-pubsub/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function Pubsub() {
  var subscribers = []
  return {
    subscribe: subscribe,
    publish: publish
  }
  function subscribe(subscriber) {
    subscribers.push(subscriber)
    return function unsubscribe() {
      var idx = subscribers.indexOf(subscriber)
      if (idx > -1) {
        subscribers.splice(idx, 1)
      }
    }
  }
  function publish() {
    for (var i = 0; i < subscribers.length; i++) {
      subscribers[i].apply(null, arguments)
    }
  }
}

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fpost%2F%5Bslug%5D&absolutePagePath=C%3A%5CUsers%5Cmichael.lapuz%5CDownloads%5CProjects%5Cmy-blog%5Cweb%5Cpages%5Cpost%5C%5Bslug%5D.js!./":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fpost%2F%5Bslug%5D&absolutePagePath=C%3A%5CUsers%5Cmichael.lapuz%5CDownloads%5CProjects%5Cmy-blog%5Cweb%5Cpages%5Cpost%5C%5Bslug%5D.js ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[slug]", function() {
      var mod = __webpack_require__(/*! ./pages/post/[slug].js */ "./pages/post/[slug].js")
      if(true) {
        module.hot.accept(/*! ./pages/post/[slug].js */ "./pages/post/[slug].js", function() {
          if(!next.router.components["/post/[slug]"]) return
          var updatedPage = __webpack_require__(/*! ./pages/post/[slug].js */ "./pages/post/[slug].js")
          next.router.update("/post/[slug]", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/parse-headers/parse-headers.js":
/*!*****************************************************!*\
  !*** ./node_modules/parse-headers/parse-headers.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var trim = function(string) {
  return string.replace(/^\s+|\s+$/g, '');
}
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  var headersArr = trim(headers).split('\n')

  for (var i = 0; i < headersArr.length; i++) {
    var row = headersArr[i]
    var index = row.indexOf(':')
    , key = trim(row.slice(0, index)).toLowerCase()
    , value = trim(row.slice(index + 1))

    if (typeof(result[key]) === 'undefined') {
      result[key] = value
    } else if (isArray(result[key])) {
      result[key].push(value)
    } else {
      result[key] = [ result[key], value ]
    }
  }

  return result
}


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/querystringify/index.js":
/*!**********************************************!*\
  !*** ./node_modules/querystringify/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */
function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}

/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */
function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encodeURIComponent(key);
      value = encodeURIComponent(value);

      //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //
      if (key === null || value === null) continue;
      pairs.push(key +'='+ value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/requires-port/index.js":
/*!*********************************************!*\
  !*** ./node_modules/requires-port/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),

/***/ "./node_modules/rxjs/internal/Observable.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/internal/util/toSubscriber.js");
var observable_1 = __webpack_require__(/*! ./symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var pipe_1 = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError_1.canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observer.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscriber.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var Observer_1 = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/internal/Observer.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscription.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/config.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/empty.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/empty.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
exports.EMPTY = new Observable_1.Observable(function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
}
exports.empty = empty;
function emptyScheduled(scheduler) {
    return new Observable_1.Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/defaultIfEmpty.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/defaultIfEmpty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return function (source) { return source.lift(new DefaultIfEmptyOperator(defaultValue)); };
}
exports.defaultIfEmpty = defaultIfEmpty;
var DefaultIfEmptyOperator = (function () {
    function DefaultIfEmptyOperator(defaultValue) {
        this.defaultValue = defaultValue;
    }
    DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
    };
    return DefaultIfEmptyOperator;
}());
var DefaultIfEmptySubscriber = (function (_super) {
    __extends(DefaultIfEmptySubscriber, _super);
    function DefaultIfEmptySubscriber(destination, defaultValue) {
        var _this = _super.call(this, destination) || this;
        _this.defaultValue = defaultValue;
        _this.isEmpty = true;
        return _this;
    }
    DefaultIfEmptySubscriber.prototype._next = function (value) {
        this.isEmpty = false;
        this.destination.next(value);
    };
    DefaultIfEmptySubscriber.prototype._complete = function () {
        if (this.isEmpty) {
            this.destination.next(this.defaultValue);
        }
        this.destination.complete();
    };
    return DefaultIfEmptySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/filter.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/filter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
    };
}
exports.filter = filter;
var FilterOperator = (function () {
    function FilterOperator(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
}());
var FilterSubscriber = (function (_super) {
    __extends(FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
    }
    FilterSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    };
    return FilterSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/map.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/map.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
exports.map = map;
var MapOperator = (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
exports.MapOperator = MapOperator;
var MapSubscriber = (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/reduce.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/reduce.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var scan_1 = __webpack_require__(/*! ./scan */ "./node_modules/rxjs/internal/operators/scan.js");
var takeLast_1 = __webpack_require__(/*! ./takeLast */ "./node_modules/rxjs/internal/operators/takeLast.js");
var defaultIfEmpty_1 = __webpack_require__(/*! ./defaultIfEmpty */ "./node_modules/rxjs/internal/operators/defaultIfEmpty.js");
var pipe_1 = __webpack_require__(/*! ../util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
function reduce(accumulator, seed) {
    if (arguments.length >= 2) {
        return function reduceOperatorFunctionWithSeed(source) {
            return pipe_1.pipe(scan_1.scan(accumulator, seed), takeLast_1.takeLast(1), defaultIfEmpty_1.defaultIfEmpty(seed))(source);
        };
    }
    return function reduceOperatorFunction(source) {
        return pipe_1.pipe(scan_1.scan(function (acc, value, index) { return accumulator(acc, value, index + 1); }), takeLast_1.takeLast(1))(source);
    };
}
exports.reduce = reduce;
//# sourceMappingURL=reduce.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/scan.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/scan.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function scan(accumulator, seed) {
    var hasSeed = false;
    if (arguments.length >= 2) {
        hasSeed = true;
    }
    return function scanOperatorFunction(source) {
        return source.lift(new ScanOperator(accumulator, seed, hasSeed));
    };
}
exports.scan = scan;
var ScanOperator = (function () {
    function ScanOperator(accumulator, seed, hasSeed) {
        if (hasSeed === void 0) { hasSeed = false; }
        this.accumulator = accumulator;
        this.seed = seed;
        this.hasSeed = hasSeed;
    }
    ScanOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
    };
    return ScanOperator;
}());
var ScanSubscriber = (function (_super) {
    __extends(ScanSubscriber, _super);
    function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
        var _this = _super.call(this, destination) || this;
        _this.accumulator = accumulator;
        _this._seed = _seed;
        _this.hasSeed = hasSeed;
        _this.index = 0;
        return _this;
    }
    Object.defineProperty(ScanSubscriber.prototype, "seed", {
        get: function () {
            return this._seed;
        },
        set: function (value) {
            this.hasSeed = true;
            this._seed = value;
        },
        enumerable: true,
        configurable: true
    });
    ScanSubscriber.prototype._next = function (value) {
        if (!this.hasSeed) {
            this.seed = value;
            this.destination.next(value);
        }
        else {
            return this._tryNext(value);
        }
    };
    ScanSubscriber.prototype._tryNext = function (value) {
        var index = this.index++;
        var result;
        try {
            result = this.accumulator(this.seed, value, index);
        }
        catch (err) {
            this.destination.error(err);
        }
        this.seed = result;
        this.destination.next(result);
    };
    return ScanSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=scan.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/takeLast.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/takeLast.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var ArgumentOutOfRangeError_1 = __webpack_require__(/*! ../util/ArgumentOutOfRangeError */ "./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js");
var empty_1 = __webpack_require__(/*! ../observable/empty */ "./node_modules/rxjs/internal/observable/empty.js");
function takeLast(count) {
    return function takeLastOperatorFunction(source) {
        if (count === 0) {
            return empty_1.empty();
        }
        else {
            return source.lift(new TakeLastOperator(count));
        }
    };
}
exports.takeLast = takeLast;
var TakeLastOperator = (function () {
    function TakeLastOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
        }
    }
    TakeLastOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
    };
    return TakeLastOperator;
}());
var TakeLastSubscriber = (function (_super) {
    __extends(TakeLastSubscriber, _super);
    function TakeLastSubscriber(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.ring = new Array();
        _this.count = 0;
        return _this;
    }
    TakeLastSubscriber.prototype._next = function (value) {
        var ring = this.ring;
        var total = this.total;
        var count = this.count++;
        if (ring.length < total) {
            ring.push(value);
        }
        else {
            var index = count % total;
            ring[index] = value;
        }
    };
    TakeLastSubscriber.prototype._complete = function () {
        var destination = this.destination;
        var count = this.count;
        if (count > 0) {
            var total = this.count >= this.total ? this.total : this.count;
            var ring = this.ring;
            for (var i = 0; i < total; i++) {
                var idx = (count++) % total;
                destination.next(ring[idx]);
            }
        }
        destination.complete();
    };
    return TakeLastSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=takeLast.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/observable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = (function () {
    return typeof Symbol === 'function'
        ? Symbol('rxSubscriber')
        : '@@rxSubscriber_' + Math.random();
})();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ArgumentOutOfRangeErrorImpl = (function () {
    function ArgumentOutOfRangeErrorImpl() {
        Error.call(this);
        this.message = 'argument out of range';
        this.name = 'ArgumentOutOfRangeError';
        return this;
    }
    ArgumentOutOfRangeErrorImpl.prototype = Object.create(Error.prototype);
    return ArgumentOutOfRangeErrorImpl;
})();
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UnsubscriptionErrorImpl = (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/canReportError.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
exports.canReportError = canReportError;
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/noop.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/noop.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function noop() { }
exports.noop = noop;
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/pipe.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var noop_1 = __webpack_require__(/*! ./noop */ "./node_modules/rxjs/internal/util/noop.js");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (!fns) {
        return noop_1.noop;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/toSubscriber.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var Observer_1 = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/internal/Observer.js");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "./node_modules/same-origin/index.js":
/*!*******************************************!*\
  !*** ./node_modules/same-origin/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var url = __webpack_require__(/*! url */ "./node_modules/same-origin/url-parser.js");

module.exports = function(uri1, uri2, ieMode) {
    if (uri1 === uri2) {
        return true;
    }

    var url1 = url.parse(uri1, false, true);
    var url2 = url.parse(uri2, false, true);

    var url1Port = url1.port|0 || (url1.protocol === 'https' ? 443 : 80);
    var url2Port = url2.port|0 || (url2.protocol === 'https' ? 443 : 80);

    var match = {
        proto: url1.protocol === url2.protocol,
        hostname: url1.hostname === url2.hostname,
        port: url1Port === url2Port
    };

    return ((match.proto && match.hostname) && (match.port || ieMode));
};

/***/ }),

/***/ "./node_modules/same-origin/url-parser.js":
/*!************************************************!*\
  !*** ./node_modules/same-origin/url-parser.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * This file is only used for the browser version of `same-origin`.
 * Used to bring down the size of the browser bundle.
 */


var regex = /^(?:(?:(?:([^:\/#\?]+:)?(?:(?:\/\/)((?:((?:[^:@\/#\?]+)(?:\:(?:[^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((?:\/?(?:[^\/\?#]+\/+)*)(?:[^\?#]*)))?(\?[^#]+)?)(#.*)?/;

module.exports = {
    regex: regex,
    parse: function(url) {
        var match = regex.exec(url);
        if (!match) {
            return {};
        }

        return {
            protocol: (match[1] || '').toLowerCase() || undefined,
            hostname: (match[5] || '').toLowerCase() || undefined,
            port: match[6] || undefined
        };
    }
};

/***/ }),

/***/ "./node_modules/url-parse/index.js":
/*!*****************************************!*\
  !*** ./node_modules/url-parse/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var required = __webpack_require__(/*! requires-port */ "./node_modules/requires-port/index.js")
  , qs = __webpack_require__(/*! querystringify */ "./node_modules/querystringify/index.js")
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , whitespace = '[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]'
  , left = new RegExp('^'+ whitespace +'+');

/**
 * Trim a given string.
 *
 * @param {String} str String to trim.
 * @public
 */
function trimLeft(str) {
  return (str ? str : '').toString().replace(left, '');
}

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof global !== 'undefined') globalVar = global;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  address = trimLeft(address);
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  if (relative === '') return base;

  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  address = trimLeft(address);

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;

module.exports = Url;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! groq */ "./node_modules/groq/lib/groq.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sanity/block-content-to-react */ "./node_modules/@sanity/block-content-to-react/lib/BlockContent.js");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../client */ "./client.js");



var _jsxFileName = "C:\\Users\\michael.lapuz\\Downloads\\Projects\\my-blog\\web\\pages\\post\\[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["*[_type == \"post\" && slug.current == $slug][0]{\n    title,\n    \"name\": author->name,\n    \"categories\": categories[]->title,\n    body\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var query = groq__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());

var urlFor = function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default()(_client__WEBPACK_IMPORTED_MODULE_7__["default"]).image(source);
};

var Post = function Post(props) {
  var _props$title = props.title,
      title = _props$title === void 0 ? 'Missing title' : _props$title,
      _props$name = props.name,
      name = _props$name === void 0 ? 'Missing name' : _props$name,
      categories = props.categories,
      authorImage = props.authorImage,
      _props$body = props.body,
      body = _props$body === void 0 ? [] : _props$body;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, title), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "By ", name), categories && __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, categories.map(function (category) {
    return __jsx("li", {
      key: category,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, category);
  })), authorImage && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("img", {
    src: urlFor(authorImage).width(50).url(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_6___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    blocks: body,
    imageOptions: {
      w: 320,
      h: 240,
      fit: 'max'
    }
  }, _client__WEBPACK_IMPORTED_MODULE_7__["default"].config(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })));
};

Post.getInitialProps = function _callee(context) {
  var _context$query$slug, slug;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context$query$slug = context.query.slug, slug = _context$query$slug === void 0 ? '' : _context$query$slug;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_client__WEBPACK_IMPORTED_MODULE_7__["default"].fetch(query, {
            slug: slug
          }));

        case 3:
          return _context.abrupt("return", _context.sent);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ 1:
/*!************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fpost%2F%5Bslug%5D&absolutePagePath=C%3A%5CUsers%5Cmichael.lapuz%5CDownloads%5CProjects%5Cmy-blog%5Cweb%5Cpages%5Cpost%5C%5Bslug%5D.js ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fpost%2F%5Bslug%5D&absolutePagePath=C%3A%5CUsers%5Cmichael.lapuz%5CDownloads%5CProjects%5Cmy-blog%5Cweb%5Cpages%5Cpost%5C%5Bslug%5D.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fpost%2F%5Bslug%5D&absolutePagePath=C%3A%5CUsers%5Cmichael.lapuz%5CDownloads%5CProjects%5Cmy-blog%5Cweb%5Cpages%5Cpost%5C%5Bslug%5D.js!./");


/***/ }),

/***/ "dll-reference dll_ef0ff7c60362f24a921f":
/*!*******************************************!*\
  !*** external "dll_ef0ff7c60362f24a921f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ef0ff7c60362f24a921f;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=[slug].js.map