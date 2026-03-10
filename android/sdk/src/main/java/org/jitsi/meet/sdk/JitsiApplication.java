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

import androidx.annotation.Nullable;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactHost;
import com.facebook.react.defaults.DefaultReactHost;

/**
 * Base Application class for Jitsi Meet that implements {@link ReactApplication}.
 *
 * Initialization (SoLoader, new architecture, WebRTC, ReactHost startup) is handled
 * automatically by {@link JitsiInitializer} via {@code androidx.startup}.
 * Consumers can extend this class for convenience, or use their own Application
 * class — the SDK will initialize itself either way.
 */
public class JitsiApplication extends Application implements ReactApplication {
    private ReactHost mReactHost;

    @Nullable
    @Override
    public ReactHost getReactHost() {
        if (mReactHost == null) {
            mReactHost = DefaultReactHost.getDefaultReactHost(
                this, new JitsiReactNativeHost(this), null);
        }
        return mReactHost;
    }
}