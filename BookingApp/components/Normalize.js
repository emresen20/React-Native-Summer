import { Dimensions, Platform, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const scale = SCREEN_WIDTH / 360;

export function pixelNormalize(size) {
    const newSize = size * scale;
    if (Platform.OS === "ios") {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) ;
    }
}
// //Ekran Boyutlarına Duyarlılık: Bu fonksiyon, uygulamanızın farklı ekran boyutlarına sahip cihazlarda tutarlı ve uyumlu görünmesini sağlar. Cihaz ekran genişliğine göre boyutları ölçeklendirir.
// Platform Spesifik Ayarlamalar: iOS ve Android platformları için özel ayarlamalar yaparak her iki platformda da görsel uyum sağlar.
// Dinamik Boyutlandırma: Kullanıcı arayüzü bileşenlerinin boyutlarını dinamik olarak ayarlayarak daha esnek ve uyumlu bir tasarım elde edilir.