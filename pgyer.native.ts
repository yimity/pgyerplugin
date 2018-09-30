import {Injectable} from '@angular/core';
import {Cordova, IonicNativePlugin, Plugin} from '@ionic-native/core';


/**
 * @name PgyerPlugin
 * @description
 * 蒲公英的 cordova 插件的 ionic 2 的封装.
 * 其实就是 @ionic-native/pgyer，但是 ionic native 没有此插件，所以要自己写。和 此 Repo 的插件文件对应的来使用。
 *
 * @usage
 * ```typescript
 * import { PgyerPlugin } from '';
 *
 * constructor(private pgyer: PgyerPlugin) { }
 *
 * ...
 *
 *
 * this.pgyer.crashRegister();
 * this.pgyer.showFeedback();
 * this.pgyer.checkUpdate();
 *
 * ```
 */
@Plugin({
    pluginName: 'pgyerplugin',
    plugin    : 'pgyerplugin',
    pluginRef : 'pgyer',
    repo      : 'https://registry.npmjs.org/pgyerplugin/',
    platforms : ['Android', 'iOS']
})
@Injectable()
export class PgyerPlugin extends IonicNativePlugin {

    @Cordova()
    crashRegister(): Promise<string> {
        return;
    }

    @Cordova()
    showFeedback(): Promise<string> {
        return;
    }

    @Cordova()
    checkUpdate(): Promise<string | number> {
        return;
    }

}
