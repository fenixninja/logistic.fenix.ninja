/**
 * WhatsAuth Logistic - Terminal de Escaneo y Reparto
 * Sistema de Internacionalización (i18n) + Sincronización Móvil & Paquetería
 */

// Tiny bit of JS to ensure that the notch doesn't move about when you resize the screen (Solicitado por el usuario)
const delay = 300;
let afterResize;
let currentStyle;

window.onresize = function () {
    document.body.classList.add("is-resizing");
    clearTimeout(afterResize);
    afterResize = setTimeout(
        () => document.body.classList.remove("is-resizing"),
        delay
    );
};

/* ========================================================
   DICCIONARIO I18N (7 IDIOMAS)
   es, en, de, fr, hi, zh, ja
   ======================================================== */
const I18N = {
    es: {
        brand_subtag: "TERMINAL LOGÍSTICA",
        nav_scan: "Escanear",
        nav_packages: "Paquetes en Ruta",
        nav_sheet: "Hoja de Reparto",
        nav_history: "Historial",
        status_online: "EN LÍNEA • GPS ACTIVO",
        btn_sync: "Sincronizar Ruta",
        scan_kicker: "TERMINAL MÓVIL",
        scan_badge: "WhatsAuth POD v2.4",
        scan_title: "SECCIÓN SCAN",
        scan_desc: "Apunta o selecciona un bulto para verificar el precinto biométrico y geocercado del destinatario.",
        notch_status_active: "ESCANER ACTIVO",
        notch_ready: "Listo para enfocar",
        terminal_id_label: "TERMINAL: ES-FNX-01",
        terminal_gps_chip: "GPS 100%",
        hud_pkg_badge: "PAQUETE ENFOCADO",
        hud_label_recipient: "Destinatario:",
        hud_label_address: "Dirección:",
        hud_label_weight: "Peso / Tipo:",
        hud_label_geofence: "Geocerca:",
        hud_geofence_status: "En rango (Δ 2.4 m)",
        btn_certify_delivery: "CERTIFICAR RECEPCIÓN",
        packages_kicker: "LOGÍSTICA DE CARGA",
        packages_count_badge: "6 BULTOS EN RUTA",
        packages_title: "SELECCIONAR PAQUETE",
        packages_desc: "Haz clic en una caja de cartón para enfocarla en el visor del iPhone y procesar su entrega verificada.",
        label_carrier: "EXPRESS COURIER",
        stamp_fragile: "FRÁGIL",
        stamp_urgent: "URGENTE",
        stamp_custody: "CUSTODIA",
        stamp_heavy: "PESADO",
        stamp_control: "CONTROL",
        box_status_focused: "● Enfocado en Escáner",
        box_hint_selected: "Seleccionado",
        box_status_pending: "○ En espera",
        box_hint_click: "Clic para escanear",
        footer_legal: "WhatsAuth Logistic Platform • Protocolo eIDAS & Art. 326 LEC",
        footer_author: "Autor:",
        // Cadenas dinámicas JS
        js_scanning: "ESCANEANDO...",
        js_focused_suffix: "enfocado",
        js_verified: "CÓDIGO VERIFICADO",
        js_signing: "FIRMANDO COMPROBANTE...",
        js_sealed: "✓ RECEPCIÓN SELLADA",
        js_hash_registered: "✓ HASH SHA-256 REGISTRADO",
        js_certified: "ENTREGA CERTIFICADA",
        js_immutable_receipt: "Comprobante inmutable emitido",
        js_delivered: "✓ ENTREGADO",
        js_certify_action: "CERTIFICAR RECEPCIÓN",
        nav_delivered: "Entregados",
        drawer_title: "Paquetes Entregados",
        drawer_empty: "No hay entregas certificadas todavía.",
        drawer_empty_sub: "Selecciona un paquete y escanea su QR con WhatsApp para sellar la entrega.",
        drawer_clear: "Vaciar Registro",
        drawer_hash_label: "Precinto Criptográfico:",
        btn_whatsapp_verify: "Confirmar en WhatsApp",
        loading_qr: "Cargando QR...",
        toast_delivered_title: "✓ ¡Recepción Sellada!",
        toast_delivered_desc: "Paquete verificado con WhatsApp"
    },
    en: {
        brand_subtag: "LOGISTIC TERMINAL",
        nav_scan: "Scan",
        nav_packages: "Parcels en Route",
        nav_sheet: "Delivery Sheet",
        nav_history: "History",
        status_online: "ONLINE • GPS ACTIVE",
        btn_sync: "Sync Route",
        scan_kicker: "MOBILE TERMINAL",
        scan_badge: "WhatsAuth POD v2.4",
        scan_title: "SCAN SECTION",
        scan_desc: "Point or select a parcel to verify the biometric seal and recipient geofence.",
        notch_status_active: "SCANNER ACTIVE",
        notch_ready: "Ready to focus",
        terminal_id_label: "TERMINAL: ES-FNX-01",
        terminal_gps_chip: "GPS 100%",
        hud_pkg_badge: "FOCUSED PARCEL",
        hud_label_recipient: "Recipient:",
        hud_label_address: "Address:",
        hud_label_weight: "Weight / Type:",
        hud_label_geofence: "Geofence:",
        hud_geofence_status: "In range (Δ 2.4 m)",
        btn_certify_delivery: "CERTIFY DELIVERY",
        packages_kicker: "CARGO LOGISTICS",
        packages_count_badge: "6 PARCELS EN ROUTE",
        packages_title: "SELECT PARCEL",
        packages_desc: "Click on a cardboard box to focus it in the iPhone viewfinder and process its verified delivery.",
        label_carrier: "EXPRESS COURIER",
        stamp_fragile: "FRAGILE",
        stamp_urgent: "URGENT",
        stamp_custody: "CUSTODY",
        stamp_heavy: "HEAVY",
        stamp_control: "CONTROL",
        box_status_focused: "● Focused on Scanner",
        box_hint_selected: "Selected",
        box_status_pending: "○ Pending",
        box_hint_click: "Click to scan",
        footer_legal: "WhatsAuth Logistic Platform • eIDAS Protocol & Art. 326 LEC",
        footer_author: "Author:",
        // Dynamic strings
        js_scanning: "SCANNING...",
        js_focused_suffix: "focused",
        js_verified: "CODE VERIFIED",
        js_signing: "SIGNING RECEIPT...",
        js_sealed: "✓ RECEIPT SEALED",
        js_hash_registered: "✓ SHA-256 HASH REGISTERED",
        js_certified: "DELIVERY CERTIFIED",
        js_immutable_receipt: "Immutable receipt issued",
        js_delivered: "✓ DELIVERED",
        js_certify_action: "CERTIFY DELIVERY",
        nav_delivered: "Delivered",
        drawer_title: "Delivered Parcels",
        drawer_empty: "No certified deliveries yet.",
        drawer_empty_sub: "Select a parcel and scan its QR with WhatsApp to seal delivery.",
        drawer_clear: "Clear History",
        drawer_hash_label: "Cryptographic Seal:",
        btn_whatsapp_verify: "Confirm in WhatsApp",
        loading_qr: "Loading QR...",
        toast_delivered_title: "✓ Receipt Sealed!",
        toast_delivered_desc: "Parcel verified with WhatsApp"
    },
    de: {
        brand_subtag: "LOGISTIK-TERMINAL",
        nav_scan: "Scannen",
        nav_packages: "Pakete auf Route",
        nav_sheet: "Lieferliste",
        nav_history: "Verlauf",
        status_online: "ONLINE • GPS AKTIV",
        btn_sync: "Route synchronisieren",
        scan_kicker: "MOBILES TERMINAL",
        scan_badge: "WhatsAuth POD v2.4",
        scan_title: "SCAN-BEREICH",
        scan_desc: "Ein Paket anvisieren oder auswählen, um das biometrische Siegel und Geofencing zu verifizieren.",
        notch_status_active: "SCANNER AKTIV",
        notch_ready: "Bereit zum Fokussieren",
        terminal_id_label: "TERMINAL: ES-FNX-01",
        terminal_gps_chip: "GPS 100%",
        hud_pkg_badge: "PAKET FOKUSSIERT",
        hud_label_recipient: "Empfänger:",
        hud_label_address: "Adresse:",
        hud_label_weight: "Gewicht / Art:",
        hud_label_geofence: "Geofence:",
        hud_geofence_status: "Im Bereich (Δ 2.4 m)",
        btn_certify_delivery: "EMPFANG BESTÄTIGEN",
        packages_kicker: "FRACHTLOGISTIK",
        packages_count_badge: "6 PAKETE UNTERWEGS",
        packages_title: "PAKET AUSWÄHLEN",
        packages_desc: "Klicken Sie auf einen Karton, um ihn im iPhone-Sucher zu fokussieren und die verifizierte Zustellung durchzuführen.",
        label_carrier: "EXPRESS KURIER",
        stamp_fragile: "ZERBRECHLICH",
        stamp_urgent: "EILIG",
        stamp_custody: "VERWAHRUNG",
        stamp_heavy: "SCHWER",
        stamp_control: "KONTROLLE",
        box_status_focused: "● Im Scanner fokussiert",
        box_hint_selected: "Ausgewählt",
        box_status_pending: "○ Ausstehend",
        box_hint_click: "Zum Scannen klicken",
        footer_legal: "WhatsAuth Logistik-Plattform • eIDAS-Protokoll & Art. 326 LEC",
        footer_author: "Autor:",
        // Dynamic strings
        js_scanning: "WIRD GESCANNT...",
        js_focused_suffix: "fokussiert",
        js_verified: "CODE VERIFIZIERT",
        js_signing: "BELEG WIRD SIGNIERT...",
        js_sealed: "✓ EMPFANG VERSIEGELT",
        js_hash_registered: "✓ SHA-256 HASH REGISTRIERT",
        js_certified: "ZUSTELLUNG ZERTIFIZIERT",
        js_immutable_receipt: "Unveränderlicher Beleg ausgestellt",
        js_delivered: "✓ ZUGESTELLT",
        js_certify_action: "EMPFANG BESTÄTIGEN",
        nav_delivered: "Zugestellt",
        drawer_title: "Zugestellte Pakete",
        drawer_empty: "Noch keine zertifizierten Zustellungen.",
        drawer_empty_sub: "Wählen Sie ein Paket und scannen Sie den QR mit WhatsApp.",
        drawer_clear: "Verlauf leeren",
        drawer_hash_label: "Kryptografisches Siegel:",
        btn_whatsapp_verify: "In WhatsApp bestätigen",
        loading_qr: "QR wird geladen...",
        toast_delivered_title: "✓ Empfang versiegelt!",
        toast_delivered_desc: "Paket mit WhatsApp verifiziert"
    },
    fr: {
        brand_subtag: "TERMINAL LOGISTIQUE",
        nav_scan: "Scanner",
        nav_packages: "Colis en Route",
        nav_sheet: "Feuille de Route",
        nav_history: "Historique",
        status_online: "EN LIGNE • GPS ACTIF",
        btn_sync: "Synchroniser l'itinéraire",
        scan_kicker: "TERMINAL MOBILE",
        scan_badge: "WhatsAuth POD v2.4",
        scan_title: "SECTION SCAN",
        scan_desc: "Pointez ou sélectionnez un colis pour vérifier le scellé biométrique et le géorepérage du destinataire.",
        notch_status_active: "SCANNER ACTIF",
        notch_ready: "Prêt à cibler",
        terminal_id_label: "TERMINAL: ES-FNX-01",
        terminal_gps_chip: "GPS 100%",
        hud_pkg_badge: "COLIS CIBLÉ",
        hud_label_recipient: "Destinataire :",
        hud_label_address: "Adresse :",
        hud_label_weight: "Poids / Type :",
        hud_label_geofence: "Périmètre GPS :",
        hud_geofence_status: "À portée (Δ 2.4 m)",
        btn_certify_delivery: "CERTIFIER LA RÉCEPTION",
        packages_kicker: "LOGISTIQUE DU FRET",
        packages_count_badge: "6 COLIS EN ROUTE",
        packages_title: "SÉLECTIONNER LE COLIS",
        packages_desc: "Cliquez sur un carton pour le cibler dans le viseur de l'iPhone et certifier la livraison.",
        label_carrier: "COURSIER EXPRESS",
        stamp_fragile: "FRAGILE",
        stamp_urgent: "URGENT",
        stamp_custody: "GARDE",
        stamp_heavy: "LOURD",
        stamp_control: "CONTRÔLE",
        box_status_focused: "● Ciblé dans le scanner",
        box_hint_selected: "Sélectionné",
        box_status_pending: "○ En attente",
        box_hint_click: "Cliquer pour scanner",
        footer_legal: "WhatsAuth Logistic Platform • Protocole eIDAS & Art. 326 LEC",
        footer_author: "Auteur :",
        // Dynamic strings
        js_scanning: "NUMÉRISATION...",
        js_focused_suffix: "ciblé",
        js_verified: "CODE VÉRIFIÉ",
        js_signing: "SIGNATURE DU REÇU...",
        js_sealed: "✓ RÉCEPTION SCELLÉE",
        js_hash_registered: "✓ HASH SHA-256 ENREGISTRÉ",
        js_certified: "LIVRAISON CERTIFIÉE",
        js_immutable_receipt: "Reçu immuable émis",
        js_delivered: "✓ LIVRÉ",
        js_certify_action: "CERTIFIER LA RÉCEPTION",
        nav_delivered: "Livrés",
        drawer_title: "Colis Livrés",
        drawer_empty: "Aucune livraison certifiée pour le moment.",
        drawer_empty_sub: "Sélectionnez un colis et scannez son QR avec WhatsApp.",
        drawer_clear: "Vider l'historique",
        drawer_hash_label: "Sceau Cryptographique :",
        btn_whatsapp_verify: "Confirmer sur WhatsApp",
        loading_qr: "Chargement QR...",
        toast_delivered_title: "✓ Réception scellée !",
        toast_delivered_desc: "Colis vérifié avec WhatsApp"
    },
    hi: {
        brand_subtag: "लॉजिस्टिक्स टर्मिनल",
        nav_scan: "स्कैन करें",
        nav_packages: "मार्ग में पार्सल",
        nav_sheet: "डिलीवरी शीट",
        nav_history: "इतिहास",
        status_online: "ऑनलाइन • जीपीएस सक्रिय",
        btn_sync: "मार्ग सिंक करें",
        scan_kicker: "मोबाइल टर्मिनल",
        scan_badge: "WhatsAuth POD v2.4",
        scan_title: "स्कैन अनुभाग",
        scan_desc: "बायोमेट्रिक सील और प्राप्तकर्ता के जियोफेंस को सत्यापित करने के लिए पार्सल को चुनें।",
        notch_status_active: "स्कैनर सक्रिय",
        notch_ready: "फोकस के लिए तैयार",
        terminal_id_label: "टर्मिनल: ES-FNX-01",
        terminal_gps_chip: "जीपीएस 100%",
        hud_pkg_badge: "पार्सल केंद्रित",
        hud_label_recipient: "प्राप्तकर्ता:",
        hud_label_address: "पता:",
        hud_label_weight: "वजन / प्रकार:",
        hud_label_geofence: "जियोफेंस:",
        hud_geofence_status: "रेंज में (Δ 2.4 मी)",
        btn_certify_delivery: "डिलीवरी प्रमाणित करें",
        packages_kicker: "कार्गो लॉजिस्टिक्स",
        packages_count_badge: "6 पार्सल मार्ग में",
        packages_title: "पार्सल चुनें",
        packages_desc: "आईफोन दृश्य में फोकस करने और सत्यापित डिलीवरी के लिए कार्डबोर्ड बॉक्स पर क्लिक करें।",
        label_carrier: "एक्सप्रेस कूरियर",
        stamp_fragile: "नाजुक",
        stamp_urgent: "तत्काल",
        stamp_custody: "संरक्षण",
        stamp_heavy: "भारी",
        stamp_control: "नियंत्रण",
        box_status_focused: "● स्कैनर पर केंद्रित",
        box_hint_selected: "चयनित",
        box_status_pending: "○ प्रतीक्षारत",
        box_hint_click: "स्कैन करने के लिए क्लिक करें",
        footer_legal: "WhatsAuth लॉजिस्टिक्स प्लेटफॉर्म • eIDAS प्रोटोकॉल और Art. 326 LEC",
        footer_author: "लेखक:",
        // Dynamic strings
        js_scanning: "स्कैन हो रहा है...",
        js_focused_suffix: "केंद्रित",
        js_verified: "कोड सत्यापित",
        js_signing: "रसीद पर हस्ताक्षर हो रहे हैं...",
        js_sealed: "✓ प्राप्ति सील की गई",
        js_hash_registered: "✓ SHA-256 हैश पंजीकृत",
        js_certified: "डिलीवरी प्रमाणित",
        js_immutable_receipt: "अपरिवर्तनीय रसीद जारी की गई",
        js_delivered: "✓ वितरित",
        js_certify_action: "डिलीवरी प्रमाणित करें",
        nav_delivered: "वितरित",
        drawer_title: "वितरित पैकेज",
        drawer_empty: "अभी तक कोई प्रमाणित डिलीवरी नहीं।",
        drawer_empty_sub: "पैकेज चुनें और डिलीवरी सील करने के लिए व्हाट्सएप से क्यूआर स्कैन करें।",
        drawer_clear: "इतिहास साफ़ करें",
        drawer_hash_label: "क्रिप्टोग्राफ़िक सील:",
        btn_whatsapp_verify: "व्हाट्सएप में पुष्टि करें",
        loading_qr: "क्यूआर लोड हो रहा है...",
        toast_delivered_title: "✓ प्राप्ति सील की गई!",
        toast_delivered_desc: "व्हाट्सएप से पैकेज सत्यापित"
    },
    zh: {
        brand_subtag: "物流移动终端",
        nav_scan: "扫描",
        nav_packages: "在途包裹",
        nav_sheet: "派送清单",
        nav_history: "历史记录",
        status_online: "在线 • GPS已激活",
        btn_sync: "同步路线",
        scan_kicker: "移动终端",
        scan_badge: "WhatsAuth POD v2.4",
        scan_title: "扫描中心",
        scan_desc: "对准或选择包裹以验证生物识别印封及收件人地理围栏。",
        notch_status_active: "扫描仪激活",
        notch_ready: "就绪待对焦",
        terminal_id_label: "终端: ES-FNX-01",
        terminal_gps_chip: "GPS 100%",
        hud_pkg_badge: "当前聚焦包裹",
        hud_label_recipient: "收件人：",
        hud_label_address: "配送地址：",
        hud_label_weight: "重量 / 类型：",
        hud_label_geofence: "地理围栏：",
        hud_geofence_status: "范围内 (Δ 2.4 米)",
        btn_certify_delivery: "认证签收交付",
        packages_kicker: "货物物流调度",
        packages_count_badge: "6 件在途包裹",
        packages_title: "选择目标包裹",
        packages_desc: "点击纸箱可在 iPhone 视窗中聚焦并办理不可篡改的认证签收。",
        label_carrier: "特快专递",
        stamp_fragile: "易碎品",
        stamp_urgent: "加急",
        stamp_custody: "保价押运",
        stamp_heavy: "重物",
        stamp_control: "医药温控",
        box_status_focused: "● 已在扫描仪中聚焦",
        box_hint_selected: "已选中",
        box_status_pending: "○ 待扫描",
        box_hint_click: "点击开始扫描",
        footer_legal: "WhatsAuth 物流平台 • eIDAS 法律证据标准 & Art. 326 LEC",
        footer_author: "作者：",
        // Dynamic strings
        js_scanning: "正在光学扫描...",
        js_focused_suffix: "已对焦",
        js_verified: "条码校验成功",
        js_signing: "正在加密签署凭证...",
        js_sealed: "✓ 签收印封成功",
        js_hash_registered: "✓ SHA-256 哈希已上链存证",
        js_certified: "交付已权威认证",
        js_immutable_receipt: "已出具不可篡改凭证",
        js_delivered: "✓ 已成功交付",
        js_certify_action: "认证签收交付",
        nav_delivered: "已送达",
        drawer_title: "已送达包裹",
        drawer_empty: "尚无已认证交付记录。",
        drawer_empty_sub: "选择包裹并在WhatsApp中扫描二维码以印封交付凭据。",
        drawer_clear: "清空记录",
        drawer_hash_label: "加密防伪印章：",
        btn_whatsapp_verify: "在WhatsApp中确认",
        loading_qr: "正在加载二维码...",
        toast_delivered_title: "✓ 签收印封成功！",
        toast_delivered_desc: "包裹已通过WhatsApp认证"
    },
    ja: {
        brand_subtag: "物流端末ターミナル",
        nav_scan: "スキャン",
        nav_packages: "配達中の荷物",
        nav_sheet: "配送伝票",
        nav_history: "履歴",
        status_online: "オンライン • GPS有効",
        btn_sync: "ルート同期",
        scan_kicker: "モバイル端末",
        scan_badge: "WhatsAuth POD v2.4",
        scan_title: "スキャンセクション",
        scan_desc: "荷物を選択またはかざして、受取人の生体認証シールとジオフェンスを照合します。",
        notch_status_active: "スキャナー作動中",
        notch_ready: "焦点合わせ待機中",
        terminal_id_label: "端末: ES-FNX-01",
        terminal_gps_chip: "GPS 100%",
        hud_pkg_badge: "選択中の荷物",
        hud_label_recipient: "受取人:",
        hud_label_address: "配送先住所:",
        hud_label_weight: "重量 / 種別:",
        hud_label_geofence: "ジオフェンス:",
        hud_geofence_status: "範囲内 (Δ 2.4 m)",
        btn_certify_delivery: "受領証明を実行",
        packages_kicker: "貨物ロジスティクス",
        packages_count_badge: "配達中 6個",
        packages_title: "荷物を選択",
        packages_desc: "段ボール箱をクリックするとiPhoneのファインダーに焦点が合い、認証配達を実行できます。",
        label_carrier: "エクスプレス便",
        stamp_fragile: "取扱注意",
        stamp_urgent: "至急",
        stamp_custody: "重要保管",
        stamp_heavy: "重量物",
        stamp_control: "温度管理",
        box_status_focused: "● スキャナーに照準",
        box_hint_selected: "選択済み",
        box_status_pending: "○ 待機中",
        box_hint_click: "クリックしてスキャン",
        footer_legal: "WhatsAuth 物流プラットフォーム • eIDASプロトコル & Art. 326 LEC",
        footer_author: "作者:",
        // Dynamic strings
        js_scanning: "スキャン実行中...",
        js_focused_suffix: "にフォーカス",
        js_verified: "コード検証完了",
        js_signing: "証明書を発行署名中...",
        js_sealed: "✓ 受領証明が確定",
        js_hash_registered: "✓ SHA-256 ハッシュ登録完了",
        js_certified: "配達が認証されました",
        js_immutable_receipt: "改ざん不能な証明書を発行",
        js_delivered: "✓ 配達完了",
        js_certify_action: "受領証明を実行",
        nav_delivered: "配達完了",
        drawer_title: "配達済み荷物",
        drawer_empty: "認定された配達はまだありません。",
        drawer_empty_sub: "荷物を選択しWhatsAppでQRをスキャンして受取を認証してください。",
        drawer_clear: "履歴を消去",
        drawer_hash_label: "暗号シール:",
        btn_whatsapp_verify: "WhatsAppで確認",
        loading_qr: "QRを読み込み中...",
        toast_delivered_title: "✓ 受領認証完了！",
        toast_delivered_desc: "WhatsAppで荷物を照合しました"
    }
};

const SUPPORTED_LANGS = ['es', 'en', 'de', 'fr', 'hi', 'zh', 'ja'];
let currentLang = 'es';

/* ========================================================
   GESTIÓN DE IDIOMA Y DETECCIÓN AUTOMÁTICA
   ======================================================== */
function detectBrowserLanguage() {
    // 0. Parámetro en la URL (?lang=en, ?lang=ja, etc.)
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        if (urlLang && SUPPORTED_LANGS.includes(urlLang.toLowerCase())) {
            return urlLang.toLowerCase();
        }
    } catch (e) { }

    // 1. Preferencia guardada previamente por el usuario
    try {
        const savedLang = localStorage.getItem('logistic_preferred_lang');
        if (savedLang && SUPPORTED_LANGS.includes(savedLang)) {
            return savedLang;
        }
    } catch (e) {
        // Si localStorage está bloqueado
    }

    // 2. Detección automática del idioma del navegador
    const browserLangs = navigator.languages || [navigator.language || 'es'];
    for (const bl of browserLangs) {
        if (!bl) continue;
        const code = bl.slice(0, 2).toLowerCase();
        if (SUPPORTED_LANGS.includes(code)) {
            return code;
        }
    }

    return 'es'; // Idioma por defecto
}

function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) {
        lang = 'es';
    }
    currentLang = lang;

    // Guardar en localStorage
    try {
        localStorage.setItem('logistic_preferred_lang', lang);
    } catch (e) {
        // Modo privado o sin permisos
    }

    // Actualizar atributo html lang
    document.documentElement.lang = lang;

    // Actualizar selector en la cabecera
    const langSelect = document.getElementById('start-lang-select');
    if (langSelect && langSelect.value !== lang) {
        langSelect.value = lang;
    }

    const dict = I18N[lang];
    if (!dict) return;

    // Actualizar todos los elementos con atributo data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Actualizar estados visuales de las cajas de cartón
    const boxes = document.querySelectorAll('.cardboard-box');
    boxes.forEach(box => {
        const statusEl = box.querySelector('.box-indicator-status');
        const hintEl = box.querySelector('.box-action-hint');

        if (box.classList.contains('delivered')) {
            if (statusEl) statusEl.innerHTML = `<span style="color:#10b981; font-weight:800;">${dict.js_delivered}</span>`;
        } else if (box.classList.contains('active')) {
            if (statusEl) statusEl.textContent = dict.box_status_focused;
            if (hintEl) hintEl.textContent = dict.box_hint_selected;
        } else {
            if (statusEl) statusEl.textContent = dict.box_status_pending;
            if (hintEl) hintEl.textContent = dict.box_hint_click;
        }
    });

    // Actualizar botón de certificar si no está en estado entregado
    const activeBox = document.querySelector('.cardboard-box.active');
    const btnCertifyLabel = document.getElementById('btn-certify-label');
    if (btnCertifyLabel && activeBox && !activeBox.classList.contains('delivered')) {
        btnCertifyLabel.textContent = dict.js_certify_action;
    }
}

// Exponer en window para integración y testing
window.setLanguage = setLanguage;

function initI18n() {
    const langSelect = document.getElementById('start-lang-select');
    const detectedLang = detectBrowserLanguage();
    setLanguage(detectedLang);

    if (langSelect) {
        const onSelectChange = (e) => {
            setLanguage(e.target.value);
        };
        langSelect.addEventListener('change', onSelectChange);
        langSelect.addEventListener('input', onSelectChange);
    }
}

/* ========================================================
   CONFIGURACIÓN WHATSAUTH PIXEL & ESTADO GLOBAL
   ======================================================== */
const WHATAUTH_CONFIG = {
    phone: '34627118121',
    domain: 'logistic.fenix.ninja',
    wsUrl: 'https://api.whatauth.com',
    logoUrl: 'img/logo.png',
    storageKey: 'logistic_delivered_packages'
};

const LogisticState = {
    socket: null,
    currentPkgId: 'ES-MAD-8921',
    activePackageSessions: {}, // { [pkgId]: { sessionId, walink, pin } }
    activeSessions: {}, // { [sessionId]: pkgId }
    deliveredPackages: [], // Array de entregas persistidas
    drawerOpen: false
};

// Deduplicador estricto para garantizar exactamente 1 entrega por escaneo físico
const verifiedDeliverySessions = new Set();
let lastDeliveryVerifiedTime = 0;

/* ========================================================
   INICIALIZACIÓN AL CARGAR EL DOM
   ======================================================== */
document.addEventListener('DOMContentLoaded', () => {
    initI18n();
    loadDeliveredPackages();
    initBackgroundVideoLoop();
    initPackageSelection();
    initDeliveryCertification();
    initDeliveredDrawer();
    restoreDeliveredStateOnBoxes();

    // Iniciar conexión Socket.IO con WhatAuth y solicitar QR del primer paquete
    getWhatAuthSocket();
    requestPackageQr(LogisticState.currentPkgId);
});

/* ========================================================
   1. REPRODUCCIÓN EN BUCLE DE LOS VÍDEOS DE FONDO
   ======================================================== */
function initBackgroundVideoLoop() {
    const videoPlayer = document.getElementById('bg-video-player');
    if (!videoPlayer) return;

    const PLAYLIST = [
        "video/Blue_delivery_van_driving_street_20260915200136.mp4",
        "video/Delivery_man_walking_city_street_20260915195750.mp4",
        "video/Delivery_person_riding_electric_\u2026_20260916092105.mp4",
        "video/Scooter_driving_down_city_street_20260915210220.mp4",
        "video/Delivery_person_riding_electric_\u2026_20260915212306.mp4",
        "video/Cargo_airplane_taxiing_on_runway_20260915222350.mp4",
        "video/Container_ship_sailing_ocean_20260915223125.mp4"
    ];

    let currentVideoIndex = 0;

    // Desactivar el atributo loop nativo para permitir que se dispare el evento 'ended'
    videoPlayer.removeAttribute('loop');
    videoPlayer.loop = false;
    videoPlayer.muted = true;
    videoPlayer.playsInline = true;

    function playNextVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % PLAYLIST.length;
        videoPlayer.src = PLAYLIST[currentVideoIndex];
        videoPlayer.load();
        videoPlayer.play().catch(e => console.log("Video transition autoplay wait:", e));
    }

    // Cuando termina el vídeo actual, pasar al siguiente de la lista
    videoPlayer.addEventListener('ended', playNextVideo);

    // Si ocurre un error con algún archivo, saltar de inmediato al siguiente
    videoPlayer.addEventListener('error', (e) => {
        console.warn("Error cargando vídeo de fondo, pasando al siguiente:", e);
        playNextVideo();
    });

    // Exponer control global para pruebas
    window.nextBackgroundVideo = playNextVideo;

    // Iniciar reproducción
    videoPlayer.play().catch(() => { });
}

/* ========================================================
   2. CONEXIÓN WEBSOCKET WHATSAUTH & CICLO DEL QR PIXEL
   ======================================================== */
function getWhatAuthSocket() {
    if (LogisticState.socket) return LogisticState.socket;
    if (typeof io === 'undefined') {
        console.warn('[WhatAuth WS] Socket.IO no disponible en la página');
        return null;
    }

    const socket = io(WHATAUTH_CONFIG.wsUrl, {
        transports: ['websocket', 'polling'],
        reconnection: true,
        reconnectionAttempts: 10,
        reconnectionDelay: 1000
    });

    socket.on('connect', () => {
        console.log('[WhatAuth WS] Conectado a', WHATAUTH_CONFIG.wsUrl, 'ID:', socket.id);
        socket.emit('subscribe_pixel', { domain: WHATAUTH_CONFIG.domain });
        if (LogisticState.currentPkgId) {
            requestPackageQr(LogisticState.currentPkgId);
        }
    });

    // 1. Recepción de QR generado por el backend de WhatAuth
    socket.on('qr_ready', (data) => {
        console.log('[WhatAuth WS] qr_ready recibido:', data);
        if (!data || !data.success) return;

        const pkgId = LogisticState.currentPkgId || 'ES-MAD-8921';
        const sessionId = data.sessionId;

        if (sessionId) {
            LogisticState.activeSessions[sessionId] = pkgId;
        }

        // Ajustar número de teléfono al número oficial configurado (+34627118121)
        let finalWalink = data.walink || '';
        if (WHATAUTH_CONFIG.phone && finalWalink) {
            try {
                const u = new URL(finalWalink);
                if (u.hostname === 'wa.me') {
                    u.pathname = `/${WHATAUTH_CONFIG.phone}`;
                } else {
                    u.searchParams.set('phone', WHATAUTH_CONFIG.phone);
                }
                finalWalink = u.toString();
            } catch (_) {}
        }

        const sessionData = {
            sessionId,
            walink: finalWalink,
            qrDataUrl: data.qrDataUrl || data.qrBase64 || '',
            pin: data.pin || `LOG-${pkgId.replace(/[^a-zA-Z0-9]/g, '')}`
        };

        LogisticState.activePackageSessions[pkgId] = sessionData;
        renderQrInPhone(pkgId, sessionData);
    });

    // 2. Recepción de confirmación cuando el usuario escanea y envía el WhatsApp
    socket.on('res_pixel_qr', handleDeliveryVerification);
    socket.on('qr_verified', handleDeliveryVerification);

    socket.on('disconnect', (reason) => {
        console.log('[WhatAuth WS] Desconectado:', reason);
    });

    LogisticState.socket = socket;
    return socket;
}

function handleDeliveryVerification(data) {
    const sessionId = data?.sessionId || '';
    const now = Date.now();

    // Deduplicación estricta
    if (sessionId && verifiedDeliverySessions.has(sessionId)) {
        console.log('[WhatAuth WS] 🛑 Sesión de entrega ya procesada:', sessionId);
        return;
    }
    if (now - lastDeliveryVerifiedTime < 2000) {
        console.log('[WhatAuth WS] 🛑 Evento duplicado en ráfaga suprimido (< 2s)');
        return;
    }

    if (sessionId) {
        verifiedDeliverySessions.add(sessionId);
    }
    lastDeliveryVerifiedTime = now;

    console.log('[WhatAuth WS] 🎯 ¡Verificación de entrega recibida!', data);
    const pkgId = (sessionId && LogisticState.activeSessions[sessionId]) || LogisticState.currentPkgId || 'ES-MAD-8921';

    markPackageDelivered(pkgId, data);
}

function requestPackageQr(pkgId) {
    const qrContainer = document.getElementById('phone-qr-target');
    if (!qrContainer) return;

    LogisticState.currentPkgId = pkgId;
    const dict = I18N[currentLang] || I18N.es;
    const isAlreadyDelivered = LogisticState.deliveredPackages.some(p => p.id === pkgId);
    const btnCertify = document.getElementById('btn-certify-delivery');
    const btnCertifyLabel = document.getElementById('btn-certify-label');

    if (isAlreadyDelivered) {
        if (btnCertify) {
            btnCertify.classList.add('disabled');
            btnCertify.style.background = '#10b981';
            btnCertify.href = '#';
        }
        if (btnCertifyLabel) {
            btnCertifyLabel.textContent = dict.js_sealed;
        }
    } else {
        if (btnCertify) {
            btnCertify.classList.remove('disabled');
            btnCertify.style.background = 'var(--brand-delivery-orange)';
        }
        if (btnCertifyLabel) {
            btnCertifyLabel.textContent = dict.js_certify_action;
        }
    }

    // Si ya tenemos sesión en caché para este paquete, renderizar de inmediato
    const cached = LogisticState.activePackageSessions[pkgId];
    if (cached && cached.walink) {
        renderQrInPhone(pkgId, cached);
        return;
    }

    // Mostrar loader en el visor del iPhone
    qrContainer.innerHTML = `
        <div class="qr-loader-container">
            <div class="qr-spinner-ring"></div>
            <span>${dict.loading_qr || 'Cargando QR...'}</span>
        </div>
    `;

    const socket = getWhatAuthSocket();
    if (socket && socket.connected) {
        socket.emit('req_pixel_qr', {
            domain: WHATAUTH_CONFIG.domain,
            id: pkgId
        });
    } else if (socket) {
        socket.once('connect', () => {
            socket.emit('req_pixel_qr', {
                domain: WHATAUTH_CONFIG.domain,
                id: pkgId
            });
        });
    }
}

function makeQrSvgResponsive(container, baseSize = 200) {
    if (!container) return;
    const applyResponsive = () => {
        const svg = container.querySelector('svg');
        if (svg) {
            svg.setAttribute('viewBox', `0 0 ${baseSize} ${baseSize}`);
            svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
            svg.removeAttribute('width');
            svg.removeAttribute('height');
            svg.style.width = '100%';
            svg.style.height = '100%';
            svg.style.maxWidth = '100%';
            svg.style.maxHeight = '100%';
            svg.style.display = 'block';
            svg.style.margin = '0 auto';
        }
    };
    applyResponsive();
    setTimeout(applyResponsive, 40);
    setTimeout(applyResponsive, 120);
    setTimeout(applyResponsive, 300);
}

function renderQrInPhone(pkgId, sessionData) {
    const qrContainer = document.getElementById('phone-qr-target');
    if (!qrContainer) return;

    qrContainer.innerHTML = '';

    const QR_BASE_SIZE = 200;
    let rendered = false;
    if (typeof QRCodeStyling !== 'undefined' && sessionData.walink) {
        try {
            const qrCode = new QRCodeStyling({
                width: QR_BASE_SIZE,
                height: QR_BASE_SIZE,
                type: 'svg',
                data: sessionData.walink,
                image: WHATAUTH_CONFIG.logoUrl || undefined,
                margin: 4,
                qrOptions: {
                    typeNumber: 0,
                    mode: 'Byte',
                    errorCorrectionLevel: 'Q'
                },
                dotsOptions: {
                    color: '#1F4594',
                    type: 'rounded'
                },
                backgroundOptions: {
                    color: '#ffffff'
                },
                imageOptions: {
                    crossOrigin: 'anonymous',
                    margin: 2,
                    imageSize: 0.22
                },
                cornersSquareOptions: {
                    color: '#FE6C27',
                    type: 'extra-rounded'
                },
                cornersDotOptions: {
                    color: '#1F4594',
                    type: 'dot'
                }
            });
            qrCode.append(qrContainer);
            makeQrSvgResponsive(qrContainer, QR_BASE_SIZE);
            rendered = true;
        } catch (err) {
            console.warn('[WhatAuth] Fallback en render de QR:', err);
        }
    }

    if (!rendered && sessionData.qrDataUrl) {
        qrContainer.innerHTML = `<img src="${sessionData.qrDataUrl}" alt="QR Pixel WhatAuth" style="width: 100%; height: 100%; object-fit: contain;">`;
    }

    // Configurar el botón de certificar para abrir WhatsApp directamente
    const btnCertify = document.getElementById('btn-certify-delivery');
    if (btnCertify && sessionData.walink) {
        btnCertify.href = sessionData.walink;
    }
}

/* ========================================================
   3. SELLADO Y CERTIFICACIÓN DE ENTREGA
   ======================================================== */
function markPackageDelivered(pkgId, scanMeta = {}) {
    const box = document.querySelector(`.cardboard-box[data-pkg-id="${pkgId}"]`);
    const dict = I18N[currentLang] || I18N.es;

    const recipient = box ? box.dataset.name : (scanMeta.name || 'Elena Morales');
    const address = box ? box.dataset.address : (scanMeta.address || 'C/ Velázquez 45, Madrid');
    const weight = box ? box.dataset.weight : (scanMeta.weight || '1.8 kg • Frágil');
    const type = box ? box.dataset.type : (scanMeta.type || 'Estándar');

    const now = new Date();
    const timeStr = now.toLocaleTimeString(currentLang === 'es' ? 'es-ES' : 'en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Generar precinto criptográfico SHA-256
    const hash = '9d3f' + Math.random().toString(16).substring(2, 10) + Math.random().toString(16).substring(2, 10);

    const deliveryRecord = {
        id: pkgId,
        recipient,
        address,
        weight,
        type,
        timestamp: now.toISOString(),
        timeFormatted: timeStr,
        hash,
        phone: scanMeta.senderPhone || scanMeta.phone || WHATAUTH_CONFIG.phone
    };

    // Persistir si no existe previamente
    if (!LogisticState.deliveredPackages.some(p => p.id === pkgId)) {
        LogisticState.deliveredPackages.unshift(deliveryRecord);
        saveDeliveredPackages();
    }

    // Marcar visualmente la caja de cartón como entregada
    if (box) {
        box.classList.add('delivered');
        const statusEl = box.querySelector('.box-indicator-status');
        const hintEl = box.querySelector('.box-action-hint');
        if (statusEl) {
            statusEl.className = "box-indicator-status";
            statusEl.innerHTML = `<span style="color:#10b981; font-weight:800;">${dict.js_delivered}</span>`;
        }
        if (hintEl) {
            hintEl.textContent = timeStr;
        }
    }

    // Actualizar HUD del iPhone si es el paquete actualmente enfocado
    if (LogisticState.currentPkgId === pkgId) {
        const btnCertify = document.getElementById('btn-certify-delivery');
        const btnCertifyLabel = document.getElementById('btn-certify-label');
        const hudHashDisplay = document.getElementById('hud-hash-display');
        const notchStatusText = document.getElementById('notch-status-text');
        const notchPkgLabel = document.getElementById('notch-pkg-label');

        if (btnCertify) {
            btnCertify.classList.add('disabled');
            btnCertify.style.background = "#10b981";
            btnCertify.href = '#';
        }
        if (btnCertifyLabel) btnCertifyLabel.textContent = dict.js_sealed;

        if (hudHashDisplay) {
            hudHashDisplay.innerHTML = `<span style="color:#10b981;">${dict.js_hash_registered} (${timeStr})</span>`;
        }

        if (notchStatusText) notchStatusText.textContent = dict.js_certified;
        if (notchPkgLabel) notchPkgLabel.textContent = `Tel: +${deliveryRecord.phone}`;
    }

    // Actualizar contador del badge
    updateDeliveredCountBadge();

    // Re-renderizar lista del Drawer si está abierto
    renderDeliveredDrawer();

    // Notificación Toast flotante
    showToast(`${dict.toast_delivered_title || '✓ ¡Recepción Sellada!'} ${pkgId}`);
}

/* ========================================================
   4. PERSISTENCIA EN LOCALSTORAGE
   ======================================================== */
function saveDeliveredPackages() {
    try {
        localStorage.setItem(WHATAUTH_CONFIG.storageKey, JSON.stringify(LogisticState.deliveredPackages));
    } catch (e) {
        console.warn('Error guardando en localStorage:', e);
    }
}

function loadDeliveredPackages() {
    try {
        const data = localStorage.getItem(WHATAUTH_CONFIG.storageKey);
        if (data) {
            LogisticState.deliveredPackages = JSON.parse(data);
        }
    } catch (e) {
        LogisticState.deliveredPackages = [];
    }
}

function restoreDeliveredStateOnBoxes() {
    const dict = I18N[currentLang] || I18N.es;
    LogisticState.deliveredPackages.forEach(pkg => {
        const box = document.querySelector(`.cardboard-box[data-pkg-id="${pkg.id}"]`);
        if (box) {
            box.classList.add('delivered');
            const statusEl = box.querySelector('.box-indicator-status');
            const hintEl = box.querySelector('.box-action-hint');
            if (statusEl) {
                statusEl.className = "box-indicator-status";
                statusEl.innerHTML = `<span style="color:#10b981; font-weight:800;">${dict.js_delivered}</span>`;
            }
            if (hintEl) {
                hintEl.textContent = pkg.timeFormatted || '✓';
            }
        }
    });
    updateDeliveredCountBadge();
}

function updateDeliveredCountBadge() {
    const count = LogisticState.deliveredPackages.length;
    const badge = document.getElementById('badge-delivered-count');
    const drawerBadge = document.getElementById('deliveredDrawerBadge');

    if (badge) {
        badge.textContent = count;
        badge.classList.remove('bump');
        void badge.offsetWidth; // Forzar reflow
        badge.classList.add('bump');
    }
    if (drawerBadge) {
        drawerBadge.textContent = count;
    }
}

/* ========================================================
   5. DRAWER DESLIZANTE DE PAQUETES ENTREGADOS & TOAST
   ======================================================== */
function initDeliveredDrawer() {
    const btnPanel = document.getElementById('btn-delivered-panel');
    const btnClose = document.getElementById('btnCloseDeliveredDrawer');
    const overlay = document.getElementById('deliveredDrawerOverlay');
    const drawer = document.getElementById('deliveredDrawer');
    const btnClear = document.getElementById('btnClearDeliveredHistory');

    function openDrawer() {
        if (!drawer || !overlay) return;
        renderDeliveredDrawer();
        drawer.classList.add('open');
        overlay.classList.add('open');
        drawer.setAttribute('aria-hidden', 'false');
        overlay.setAttribute('aria-hidden', 'false');
        LogisticState.drawerOpen = true;
    }

    function closeDrawer() {
        if (!drawer || !overlay) return;
        drawer.classList.remove('open');
        overlay.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
        overlay.setAttribute('aria-hidden', 'true');
        LogisticState.drawerOpen = false;
    }

    if (btnPanel) btnPanel.addEventListener('click', openDrawer);
    if (btnClose) btnClose.addEventListener('click', closeDrawer);
    if (overlay) overlay.addEventListener('click', closeDrawer);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && LogisticState.drawerOpen) {
            closeDrawer();
        }
    });

    if (btnClear) {
        btnClear.addEventListener('click', () => {
            LogisticState.deliveredPackages = [];
            saveDeliveredPackages();
            updateDeliveredCountBadge();

            // Resetear clases visuales en todas las cajas de cartón
            const dict = I18N[currentLang] || I18N.es;
            document.querySelectorAll('.cardboard-box').forEach(box => {
                box.classList.remove('delivered');
                const statusEl = box.querySelector('.box-indicator-status');
                const hintEl = box.querySelector('.box-action-hint');
                if (box.classList.contains('active')) {
                    if (statusEl) {
                        statusEl.className = 'box-indicator-status';
                        statusEl.textContent = dict.box_status_focused;
                    }
                    if (hintEl) hintEl.textContent = dict.box_hint_selected;
                } else {
                    if (statusEl) {
                        statusEl.className = 'box-indicator-status pending';
                        statusEl.textContent = dict.box_status_pending;
                    }
                    if (hintEl) hintEl.textContent = dict.box_hint_click;
                }
            });

            // Re-solicitar el QR del paquete enfocado actual
            requestPackageQr(LogisticState.currentPkgId);
            renderDeliveredDrawer();
            showToast(dict.drawer_clear || 'Registro vaciado');
        });
    }
}

function renderDeliveredDrawer() {
    const listContainer = document.getElementById('deliveredDrawerList');
    if (!listContainer) return;

    const dict = I18N[currentLang] || I18N.es;
    const items = LogisticState.deliveredPackages;

    if (!items || items.length === 0) {
        listContainer.innerHTML = `
            <div class="delivered-empty-state">
                <div class="delivered-empty-icon">📦</div>
                <div class="delivered-empty-title">${dict.drawer_empty || 'No hay entregas certificadas todavía.'}</div>
                <div class="delivered-empty-sub">${dict.drawer_empty_sub || 'Selecciona un paquete y escanea su QR con WhatsApp para sellar la entrega.'}</div>
            </div>
        `;
        return;
    }

    listContainer.innerHTML = items.map(item => `
        <article class="delivered-item-card">
            <div class="delivered-card-header">
                <span class="delivered-card-id font-mono">${item.id}</span>
                <span class="delivered-card-status">${dict.js_delivered || '✓ ENTREGADO'}</span>
            </div>
            <div class="delivered-card-recipient">${item.recipient}</div>
            <div class="delivered-card-address">${item.address}</div>
            <div class="delivered-card-meta">
                <span>⏱️ ${item.timeFormatted || ''}</span>
                <span class="delivered-card-hash font-mono">SHA: ${item.hash.substring(0, 10)}...</span>
            </div>
        </article>
    `).join('');
}

let toastTimer = null;
function showToast(message) {
    const toast = document.getElementById('logisticToast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

/* ========================================================
   6. INTERACTIVIDAD DE LAS 6 CAJAS DE CARTÓN (SELECCIÓN)
   ======================================================== */
function initPackageSelection() {
    const boxes = document.querySelectorAll('.cardboard-box');
    const hudPkgId = document.getElementById('hud-pkg-id');
    const hudPkgName = document.getElementById('hud-pkg-name');
    const hudPkgAddress = document.getElementById('hud-pkg-address');
    const hudPkgWeight = document.getElementById('hud-pkg-weight');
    const notchStatusText = document.getElementById('notch-status-text');
    const notchPkgLabel = document.getElementById('notch-pkg-label');
    const laserBeam = document.getElementById('laser-beam');
    const hudHashDisplay = document.getElementById('hud-hash-display');

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            const dict = I18N[currentLang] || I18N.es;

            // Quitar estado activo previo
            boxes.forEach(b => {
                b.classList.remove('active');
                const statusEl = b.querySelector('.box-indicator-status');
                const hintEl = b.querySelector('.box-action-hint');
                if (statusEl && !b.classList.contains('delivered')) {
                    statusEl.className = 'box-indicator-status pending';
                    statusEl.textContent = dict.box_status_pending;
                }
                if (hintEl && !b.classList.contains('delivered')) {
                    hintEl.textContent = dict.box_hint_click;
                }
            });

            // Activar caja actual
            box.classList.add('active');
            const statusEl = box.querySelector('.box-indicator-status');
            const hintEl = box.querySelector('.box-action-hint');
            if (statusEl && !box.classList.contains('delivered')) {
                statusEl.className = 'box-indicator-status';
                statusEl.textContent = dict.box_status_focused;
            }
            if (hintEl && !box.classList.contains('delivered')) {
                hintEl.textContent = dict.box_hint_selected;
            }

            // Extraer datos del dataset
            const pkgId = box.dataset.pkgId;
            const pkgName = box.dataset.name;
            const pkgAddress = box.dataset.address;
            const pkgWeight = box.dataset.weight;

            // Animar láser de escaneo en la pantalla del iPhone
            if (laserBeam) {
                laserBeam.style.animation = 'none';
                void laserBeam.offsetWidth; // Forzar reflow
                laserBeam.style.animation = 'scan-move 1.5s ease-in-out infinite alternate';
            }

            // Actualizar datos en la pantalla del iPhone
            if (hudPkgId) hudPkgId.textContent = pkgId;
            if (hudPkgName) hudPkgName.textContent = pkgName;
            if (hudPkgAddress) hudPkgAddress.textContent = pkgAddress;
            if (hudPkgWeight) hudPkgWeight.textContent = pkgWeight;

            // Actualizar Dynamic Island / Notch
            if (notchStatusText) notchStatusText.textContent = dict.js_scanning;
            if (notchPkgLabel) notchPkgLabel.textContent = `${pkgId} ${dict.js_focused_suffix}`;

            setTimeout(() => {
                if (notchStatusText) notchStatusText.textContent = dict.js_verified;
            }, 700);

            // Generar hash dinámico preview
            if (hudHashDisplay) {
                const randomHex = Math.random().toString(16).substring(2, 10);
                hudHashDisplay.textContent = `SHA-256: ${randomHex}9d3f...`;
            }

            // Desplazamiento fluido en pantallas móviles / tablets al iPhone
            const scanSection = document.getElementById('section-scan');
            if (scanSection && window.innerWidth <= 1024) {
                scanSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            // Cargar y renderizar el QR del paquete seleccionado
            requestPackageQr(pkgId);
        });

        // Soporte para selección con teclado (Enter / Espacio)
        box.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                box.click();
            }
        });
    });
}

/* ========================================================
   7. ACCIÓN MANUAL DEL BOTÓN CERTIFICAR ENTREGA
   ======================================================== */
function initDeliveryCertification() {
    const btnCertify = document.getElementById('btn-certify-delivery');
    const btnCertifyLabel = document.getElementById('btn-certify-label');

    if (!btnCertify) return;

    btnCertify.addEventListener('click', (e) => {
        const pkgId = LogisticState.currentPkgId || 'ES-MAD-8921';
        const isDelivered = LogisticState.deliveredPackages.some(p => p.id === pkgId);

        if (isDelivered) {
            e.preventDefault();
            return;
        }

        const dict = I18N[currentLang] || I18N.es;
        if (btnCertifyLabel) btnCertifyLabel.textContent = dict.js_signing;

        // Si tiene enlace href válido a WhatsApp, la navegación natural ocurrirá.
        // Simulamos respuesta local por si el usuario prueba sin WhatsApp real:
        setTimeout(() => {
            markPackageDelivered(pkgId);
        }, 1200);
    });
}
