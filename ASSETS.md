# 이미지 에셋 기록

내장 image_gen 도구의 배경 제거 편집 모드를 사용했습니다. CLI/API 모드는 사용하지 않았습니다. 원본은 수정하지 않았습니다.

최종 파일:
- assets/collection-photo.jpg: collection.png를 읽기 호환성을 위해 JPEG로 변환한 원본 사본. 바구니·조개·향수는 SVG clipPath로 해당 사물 영역만 표시합니다. 배경 제거 생성본은 체크무늬가 남아 채택하지 않았습니다.
- assets/camera-cutout.png: 카메라
- assets/strap-cutout.png: 페스티벌 손목 스트랩
- assets/keyring-cutout.png: ShowMaker 키링
- assets/winter-wind.jpeg: 사용자가 제공한 원본 악보 (픽셀 편집 없이 CSS 필터)
- assets/objects.js: 알파 채널과 원본에서 측정한 윤곽에 따른 표시 영역·클릭 경로

편집 프롬프트:

Collection: Remove the gray checkerboard background and background shadows from this exact asset sheet; replace with true transparent alpha. Keep all objects in original position, size, shape and proportions, including tray top left, shell bottom left and bottles right. Remove the corner sparkle. No redesign or arranging. Transparent PNG.

Camera: Extract the exact black Lomography KONSTRUKTOR camera with opened viewfinder. True transparent PNG. Preserve shape, branding, finish, lens, knobs and details. Remove only background and cast background shadow. No added elements.

Strap: Extract only the three festival wristbands together from the photo onto true transparent alpha. Preserve fabric, shape and fasteners. Remove gray background, background shadows and corner sparkle. Close crop with transparent padding.

Keyring: Remove white background from the ShowMaker keyring photograph. True transparent PNG cutout, complete chain and clasp. Preserve logo text, black oval, fine colored stripes, metal and shape. Keep holes transparent. Do not redesign or add objects.
