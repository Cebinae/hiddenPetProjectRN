# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# omg, i need to pick all classec from node_modules\react-native-navigation-bar-color

#CLASSES FROM THERE BELOW

-keep class com.thebylito.navigationbarcolor
-keepclassmembers class com.thebylito.navigationbarcolor


-keep class android.animation.ArgbEvaluator.**
-keep class android.animation.ValueAnimator.**
-keep class android.annotation.TargetApi.**
-keep class android.graphics.Color.**
-keep class android.os.Build.**
-keep class android.app.Activity.**
-keep class android.view.View.**
-keep class android.view.Window.**
-keep class android.view.WindowManager.**
-keep class androidx.annotation.UiThread.**
-keep class com.facebook.react.bridge.Arguments.**
-keep class com.facebook.react.bridge.Promise.**
-keep class com.facebook.react.bridge.ReactApplicationContext.**
-keep class com.facebook.react.bridge.ReactContextBaseJavaModule.**
-keep class com.facebook.react.bridge.ReactMethod.**
-keep class com.facebook.react.bridge.UiThreadUtil.**
-keep class com.facebook.react.bridge.WritableMap.**
-keep class java.util.HashMap.**
-keep class java.util.Map.**
-keep class com.facebook.react.uimanager.IllegalViewOperationException.**
-keep class com.facebook.react.bridge.UiThreadUtil.runOnUiThread.**


-keep class com.facebook.react.ReactPackage.**
-keep class com.facebook.react.bridge.JavaScriptModule.**
-keep class com.facebook.react.bridge.NativeModule.**
-keep class com.facebook.react.bridge.ReactApplicationContext.**
-keep class com.facebook.react.uimanager.ViewManager.**

-keep class java.util.Arrays.**
-keep class java.util.Collections.**
-keep class java.util.List.**

#yep, seems like that's all