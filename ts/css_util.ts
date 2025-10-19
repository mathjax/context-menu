/*************************************************************
 *
 *  Copyright (c) 2015-2016 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

/**
 * @file Utility functions for adding CSS styles.
 * @author v.sorge@mathjax.org (Volker Sorge)
 */

import { HtmlClasses } from './html_classes.js';

/**
 * Creates CSS classname by prefixing a dot.
 * @param name The class name.
 * @returns The context menu class name.
 */
function makeClass_(name: string): string {
  return '.' + (HtmlClasses[name] || name);
}

/**
 * @param def An array of css properties and their values.
 * @returns The css definition within braces.
 */
function cssDef_(def: string[]) {
  return '{\n  ' + def.join(';\n  ') + ';\n}';
}

/*
const INFO_STYLES: { [id: string]: string } = {};
INFO_STYLES[makeClass_('INFOCLOSE')] = cssDef_([
  'top: 0.2em',
  'right: 0.2em',
]);
INFO_STYLES[makeClass_('INFOCONTENT')] = cssDef_([
  'overflow: auto',
  'text-align: left',
  'font-size: 80%',
  'padding: 0.4em 0.6em',
  'border: 1px inset',
  'margin: 1em 0',
  'max-height: 20em',
  'max-width: 30em',
  'background-color: #EEEEEE;',
  'white-space: normal'
]);
INFO_STYLES[makeClass_('INFO') + makeClass_('MOUSEPOST')] = cssDef_([
  'outline: none',
]);
INFO_STYLES[makeClass_('INFO')] = cssDef_([
  'position: fixed',
  'left: 50%',
  'width: auto',
  'text-align: center',
  'border: 3px outset',
  'padding: 1em 2em',
  'background-color: #DDDDDD',
  'color: black',
  'cursor: default',
  'font-family: message-box',
  'font-size: 120%',
  'font-style: normal',
  'text-indent: 0',
  'text-transform: none',
  'line-height: normal',
  'letter-spacing: normal',
  'word-spacing: normal',
  'word-wrap: normal',
  'white-space: nowrap',
  'float: none',
  'z-index: 1001',
  'border-radius: 15px',
  'box-shadow: 0px 10px 20px #808080',
]);
*/

const MENU_STYLES: { [id: string]: string } = {};
MENU_STYLES[makeClass_('MENU')] = cssDef_([
  'position: absolute',
  'background-color: white',
  'color: black',
  'width: auto',
  'padding: 5px 0px',
  'border: 1px solid #CCCCCC',
  'margin: 0',
  'cursor: default',
  'font: menu',
  'text-align: left',
  'text-indent: 0',
  'text-transform: none',
  'line-height: normal',
  'letter-spacing: normal',
  'word-spacing: normal',
  'word-wrap: normal',
  'white-space: nowrap',
  'float: none',
  'z-index: 1001',
  'border-radius: 5px',
  'box-shadow: 0px 10px 20px #808080',
]);
MENU_STYLES[makeClass_('MENUITEM')] = cssDef_([
  'padding: 1px 2em',
  'background: transparent',
]);
MENU_STYLES[makeClass_('MENUARROW')] = cssDef_([
  'position: absolute',
  'right: 0.5em',
  'padding-top: 0.25em',
  'color: #666666',
  'font-family: null',
  'font-size: 0.75em',
]);
MENU_STYLES[makeClass_('MENUACTIVE') + ' ' + makeClass_('MENUARROW')] = cssDef_([
  'color: white',
]);
MENU_STYLES[makeClass_('MENUARROW') + makeClass_('RTL')] = cssDef_([
  'left: 0.5em',
  'right: auto',
]);
MENU_STYLES[makeClass_('MENUCHECK')] = cssDef_([
  'position: absolute',
  'left: 0.7em',
  'font-family: null',
]);
MENU_STYLES[makeClass_('MENUCHECK') + makeClass_('RTL')] = cssDef_([
  'right: 0.7em',
  'left: auto',
]);
MENU_STYLES[makeClass_('MENURADIOCHECK')] = cssDef_([
  'position: absolute',
  'left: 0.7em',
]);
MENU_STYLES[makeClass_('MENURADIOCHECK') + makeClass_('RTL')] = cssDef_([
  'right: 0.7em',
  'left: auto',
]);
MENU_STYLES[makeClass_('MENUINPUTBOX')] = cssDef_([
  'padding-left: 1em',
  'right: 0.5em',
  'color: #666666',
  'font-family: null',
]);
MENU_STYLES[makeClass_('MENUINPUTBOX') + makeClass_('RTL')] = cssDef_([
  'left: 0.1em',
]);
MENU_STYLES[makeClass_('MENUCOMBOBOX')] = cssDef_([
  'left: 0.1em',
  'padding-bottom: 0.5em',
]);
MENU_STYLES[makeClass_('MENUSLIDER')] = cssDef_([
  'left: 0.1em',
]);
MENU_STYLES[makeClass_('SLIDERVALUE')] = cssDef_([
  'position: absolute',
  'right: 0.1em',
  'padding-top: 0.25em',
  'color: #333333',
  'font-size: 0.75em',
]);
MENU_STYLES[makeClass_('MENUACTIVE') + ' ' + makeClass_('SLIDERVALUE')] = cssDef_([
  'color: #DDDDDD',
]);
MENU_STYLES[makeClass_('SLIDERBAR')] = cssDef_([
  'outline: none',
  'background: #D3D3D3',
]);
MENU_STYLES[makeClass_('MENULABEL')] = cssDef_([
  'padding: 1px 2em 3px 1.33em',
  'font-style: italic',
]);
MENU_STYLES[makeClass_('MENURULE')] = cssDef_([
  'border-top: 1px solid #DDDDDD',
  'margin: 4px 3px',
]);
MENU_STYLES[makeClass_('MENUDISABLED')] = cssDef_([
  'color: GrayText',
]);
MENU_STYLES[makeClass_('MENUACTIVE')] = cssDef_([
  'background-color: #606872',
  'color: white',
]);
MENU_STYLES[makeClass_('MENUDISABLED') + ':focus'] = cssDef_([
  'background-color: #E8E8E8',
]);
MENU_STYLES[makeClass_('MENULABEL') + ':focus'] = cssDef_([
  'background-color: #E8E8E8',
]);
MENU_STYLES[makeClass_('CONTEXTMENU') + ':focus'] = cssDef_([
  'outline: none',
]);
MENU_STYLES[
  makeClass_('CONTEXTMENU') + ' ' + makeClass_('MENUITEM') + ':focus'
] = cssDef_([
  'outline: none',
]);
MENU_STYLES[makeClass_('SELECTIONMENU')] = cssDef_([
  'position: relative',
  'float: left',
  'border-bottom: none',
  'box-shadow: none ! important',
  'border-radius: 0px !important',
]);
MENU_STYLES[makeClass_('SELECTIONITEM')] = cssDef_([
  'padding-right: 1em',
]);
MENU_STYLES[makeClass_('SELECTION')] = cssDef_([
  'right: 40%',
  'width: 50%',
]);
MENU_STYLES[makeClass_('SELECTIONBOX')] = cssDef_([
  'padding: 0em',
  'max-height: 20em',
  'max-width: none',
  'background-color: #FFFFFF',
]);
MENU_STYLES[makeClass_('SELECTIONDIVIDER')] = cssDef_([
  'clear: both',
  'border-top: 2px solid #000000',
]);
MENU_STYLES[makeClass_('MENU') + ' ' + makeClass_('MENUCLOSE')] = cssDef_([
  'top: -10px',
  'left: -10px',
]);
MENU_STYLES['@media (prefers-color-scheme: dark) /* menu */'] = cssDef_([
  makeClass_('MENU') + ' ' + cssDef_([
    'color: #E0E0E0',
    'background-color: #242436',
    'box-shadow: 0px 10px 20px #000',
    'border: 1px solid #808080',
  ]),
  makeClass_('SLIDERVALUE') + ' ' + cssDef_([
    'color: #D0D0D0',
  ]),
  makeClass_('MENUDISABLED') + ':focus ' + cssDef_([
    'background-color: #383838',
  ]),
  makeClass_('MENULABEL') + ':focus ' + cssDef_([
    'background-color: #585858',
  ]),
  makeClass_('MENURULE') + ' ' + cssDef_([
    'border-top: 1px solid #808080',
  ]),
  makeClass_('SELECTIONDIVIDER') + ' ' + cssDef_([
    'border-top: 2px solid #808080',
  ]),
]);


// Style of the little cross button to close a dialog or the mobile menu.
const CLOSE_ICON_STYLES: { [id: string]: string } = {};
CLOSE_ICON_STYLES[makeClass_('MENUCLOSE')] = cssDef_([
  'position: absolute',
  'cursor: pointer',
  'display: inline-block',
  'border: 2px solid #AAA',
  'border-radius: 18px',
  'font-family:  "Courier New", Courier',
  'font-size: 24px',
  'color: #F0F0F0',
]);
CLOSE_ICON_STYLES[makeClass_('MENUCLOSE') + ' span'] = cssDef_([
  'display: block',
  'background-color: #AAA',
  'border: 1.5px solid',
  'border-radius: 18px',
  'line-height: 0',
  'padding: 8px 0 6px',
]);
CLOSE_ICON_STYLES[makeClass_('MENUCLOSE') + ':hover'] = cssDef_([
  'color: white !important',
  'border: 2px solid #CCC !important',
]);
CLOSE_ICON_STYLES[makeClass_('MENUCLOSE') + ':hover span'] = cssDef_([
  'background-color: #CCC !important',
]);
CLOSE_ICON_STYLES[makeClass_('MENUCLOSE') + ':hover:focus'] = cssDef_([
  'outline: none',
]);

const STYLESHEET_NAME = 'MJX-Menu-styles';

/**
 * Adds the CSS styles for context menus.
 * @param document The HTML document.
 */
export function addMenuStyles(document: Document): void {
  addStyles_({...MENU_STYLES, /*...INFO_STYLES,*/ ...CLOSE_ICON_STYLES}, document);
}

/**
 * Creates style elements and adds them to the document.
 * @param styles The style dictionary.
 * @param doc The HTML document.
 * @param name The id to use for the stylesheet.
 */
function addStyles_(
  styles: { [id: string]: string },
  doc: Document = document,
  name: string = STYLESHEET_NAME,
): void {
  if (doc.head.querySelector('#' + name)) {
    return;
  }
  const element: HTMLStyleElement = doc.createElement('style');
  element.id = name;
  const inner = [] as string[];
  for (const style in styles) {
    inner.push(`${style} ${styles[style]}`);
  }
  element.textContent = inner.join('\n');
  doc.head.appendChild(element);
}
