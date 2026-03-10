/*
 * Copyright @ 2022-present 8x8, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.jitsi.meet.sdk;

import android.app.Application;

import com.facebook.react.ReactPackage;
import com.facebook.react.defaults.DefaultReactNativeHost;

import java.util.List;

/**
 * Implementation of {@link DefaultReactNativeHost} which wires the RN integration
 * through {@link ReactInstanceManagerHolder}.
 *
 * This makes the application look like a "greenfield" RN app to third-party modules
 * that rely on {@code ReactApplication}. The new architecture (Fabric, TurboModules)
 * is automatically configured by {@code DefaultReactNativeHost}.
 */
public class JitsiReactNativeHost extends DefaultReactNativeHost {
    public JitsiReactNativeHost(Application application) {
        super(application);
    }

    @Override
    public boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
        return ReactInstanceManagerHolder.getReactNativePackages();
    }

    @Override
    protected String getJSMainModuleName() {
        return "index.android";
    }

    @Override
    protected String getBundleAssetName() {
        return "index.android.bundle";
    }
}
