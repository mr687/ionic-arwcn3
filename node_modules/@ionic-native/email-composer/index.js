var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, Plugin, CordovaCheck, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Email Composer
 * @description
 *
 * Requires Cordova plugin: cordova-plugin-email-composer. For more info, please see the [Email Composer plugin docs](https://github.com/hypery2k/cordova-email-plugin).
 *
 *
 * @usage
 * ```typescript
 * import { EmailComposer } from '@ionic-native/email-composer';
 *
 * constructor(private emailComposer: EmailComposer) { }
 *
 * ...
 *
 *
 * this.emailComposer.isAvailable().then((available: boolean) =>{
 *  if(available) {
 *    //Now we know we can send
 *  }
 * });
 *
 * let email = {
 *   to: 'max@mustermann.de',
 *   cc: 'erika@mustermann.de',
 *   bcc: ['john@doe.com', 'jane@doe.com'],
 *   attachments: [
 *     'file://img/logo.png',
 *     'res://icon.png',
 *     'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
 *     'file://README.pdf'
 *   ],
 *   subject: 'Cordova Icons',
 *   body: 'How are you? Nice greetings from Leipzig',
 *   isHtml: true
 * };
 *
 * // Send a text message using default options
 * this.emailComposer.open(email);
 * ```
 *
 * You can also assign aliases to email apps
 * ```ts
 * // add alias
 * this.email.addAlias('gmail', 'com.google.android.gm');
 *
 * // then use alias when sending email
 * this.email.open({
 *   app: 'gmail',
 *   ...
 * });
 * ```
 * @interfaces
 * EmailComposerOptions
 */
var EmailComposer = (function (_super) {
    __extends(EmailComposer, _super);
    function EmailComposer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailComposer_1 = EmailComposer;
    /**
     * Verifies if sending emails is supported on the device.
     *
     * @param [app] {string} App id or uri scheme.
     * @returns {Promise<any>} Resolves if available, rejects if not available
     */
    EmailComposer.prototype.isAvailable = function (app) {
        return new Promise(function (resolve, reject) {
            if (app) {
                EmailComposer_1.getPlugin().isAvailable(app, function (isAvailable) {
                    if (isAvailable) {
                        resolve();
                    }
                    else {
                        reject();
                    }
                });
            }
            else {
                EmailComposer_1.getPlugin().isAvailable(function (isAvailable) {
                    if (isAvailable) {
                        resolve();
                    }
                    else {
                        reject();
                    }
                });
            }
        });
    };
    /**
     * Request permission to access email accounts information
     * @return {Promise<boolean>} returns a promise that resolves with a boolean that indicates if the permission was granted
     */
    EmailComposer.prototype.requestPermission = function () { return; };
    /**
     * Checks if the app has a permission to access email accounts information
     * @return {Promise<boolean>} returns a promise that resolves with a boolean that indicates if the permission was granted
     */
    EmailComposer.prototype.hasPermission = function () { return; };
    /**
     * Adds a new mail app alias.
     *
     * @param alias {string} The alias name
     * @param packageName {string} The package name
     */
    EmailComposer.prototype.addAlias = function (alias, packageName) { };
    /**
     * Displays the email composer pre-filled with data.
     *
     * @param options {EmailComposerOptions} Email
     * @param [scope] {any} Scope for the promise
     * @returns {Promise<any>} Resolves promise when the EmailComposer has been opened
     */
    EmailComposer.prototype.open = function (options, scope) { return; };
    EmailComposer.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    EmailComposer.ctorParameters = function () { return []; };
    __decorate([
        CordovaCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], EmailComposer.prototype, "isAvailable", null);
    __decorate([
        Cordova({
            successIndex: 0,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], EmailComposer.prototype, "requestPermission", null);
    __decorate([
        Cordova({
            successIndex: 0,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], EmailComposer.prototype, "hasPermission", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], EmailComposer.prototype, "addAlias", null);
    __decorate([
        Cordova({
            successIndex: 1,
            errorIndex: 3
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], EmailComposer.prototype, "open", null);
    EmailComposer = EmailComposer_1 = __decorate([
        Plugin({
            pluginName: 'EmailComposer',
            plugin: 'cordova-plugin-email-composer',
            pluginRef: 'cordova.plugins.email',
            repo: 'https://github.com/katzer/cordova-plugin-email-composer',
            platforms: ['Amazon Fire OS', 'Android', 'Browser', 'iOS', 'Windows']
        })
    ], EmailComposer);
    return EmailComposer;
    var EmailComposer_1;
}(IonicNativePlugin));
export { EmailComposer };
//# sourceMappingURL=index.js.map