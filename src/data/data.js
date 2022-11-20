// "MOBILE", "TV", "LAPTOP"

const Product = require("../models/product.model");

const data = [
  //   {
  //     name: "realme 9 (Sunburst Gold, 128 GB)  (6 GB RAM)",
  //     type: "MOBILE",
  //     features: [
  //       "6 GB RAM | 128 GB ROM | Expandable Upto 256 GB",
  //       "16.26 cm (6.4 inch) Full HD+ AMOLED Display",
  //       "108MP + 8MP + 2MP | 16MP Front Camera",
  //       "5000 mAh Lithium Ion Battery",
  //     ],
  //     description:
  //       "Binge-watch your favourite shows, play games and do more with the realme 9 smartphone. This mobile phone is equipped with a massive 5000 mAh battery that allows you to indulge in entertainment throughout the day. Also, this mobile phone has a powerful Snapdragon 680 Processor to offer smooth and easy multitasking performance. Moreover, thanks to the realme UI 3.0, you can enjoy easy upgrades and optimised features on this phone.",
  //     price: 16999,
  //     image:
  //       "https://rukminim1.flixcart.com/image/416/416/l3t2fm80/mobile/6/w/7/-original-imageu8cuhfumfw7.jpeg?q=70",
  //   },
  {
    name: "APPLE iPhone 11 (White, 128 GB)",
    type: "MOBILE",
    features: [
      "6 GB RAM | 128 GB ROM | Expandable Upto 256 GB",
      "16.26 cm (6.4 inch) Full HD+ AMOLED Display",
      "108MP + 8MP + 2MP | 16MP Front Camera",
      "5000 mAh Lithium Ion Battery",
    ],
    description:
      "Binge-watch your favourite shows, play games and do more with the realme 9 smartphone. This mobile phone is equipped with a massive 5000 mAh battery that allows you to indulge in entertainment throughout the day. Also, this mobile phone has a powerful Snapdragon 680 Processor to offer smooth and easy multitasking performance. Moreover, thanks to the realme UI 3.0, you can enjoy easy upgrades and optimised features on this phone.",
    price: 44999,
    image:
      "https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=70",
  },
  {
    name: "realme 9 (Stargaze White, 128 GB)  (6 GB RAM)",
    type: "MOBILE",
    features: [
      "6 GB RAM | 128 GB ROM | Expandable Upto 256 GB",
      "16.26 cm (6.4 inch) Full HD+ AMOLED Display",
      "108MP + 8MP + 2MP | 16MP Front Camera",
      "5000 mAh Lithium Ion Battery",
    ],
    description:
      "Binge-watch your favourite shows, play games and do more with the realme 9 smartphone. This mobile phone is equipped with a massive 5000 mAh battery that allows you to indulge in entertainment throughout the day. Also, this mobile phone has a powerful Snapdragon 680 Processor to offer smooth and easy multitasking performance. Moreover, thanks to the realme UI 3.0, you can enjoy easy upgrades and optimised features on this phone.",
    price: 16999,
    image:
      "https://rukminim1.flixcart.com/image/416/416/l3t2fm80/mobile/v/0/b/-original-imageu8ctfzzstqp.jpeg?q=70",
  },
  {
    name: "vivo T1 5G (Rainbow Fantasy, 128 GB)  (4 GB RAM)",
    type: "MOBILE",
    features: [
      "6 GB RAM | 128 GB ROM | Expandable Upto 256 GB",
      "16.26 cm (6.4 inch) Full HD+ AMOLED Display",
      "108MP + 8MP + 2MP | 16MP Front Camera",
      "5000 mAh Lithium Ion Battery",
    ],
    description:
      "Binge-watch your favourite shows, play games and do more with the realme 9 smartphone. This mobile phone is equipped with a massive 5000 mAh battery that allows you to indulge in entertainment throughout the day. Also, this mobile phone has a powerful Snapdragon 680 Processor to offer smooth and easy multitasking performance. Moreover, thanks to the realme UI 3.0, you can enjoy easy upgrades and optimised features on this phone.",
    price: 15990,
    image:
      "https://rukminim1.flixcart.com/image/416/416/kzd147k0/mobile/m/c/f/-original-imagbe5qknarjywp.jpeg?q=70",
  },
  {
    name: "REDMI 10 (Midnight Black, 64 GB)  (4 GB RAM)",
    type: "MOBILE",
    features: [
      "6 GB RAM | 128 GB ROM | Expandable Upto 256 GB",
      "16.26 cm (6.4 inch) Full HD+ AMOLED Display",
      "108MP + 8MP + 2MP | 16MP Front Camera",
      "5000 mAh Lithium Ion Battery",
    ],
    description:
      "Binge-watch your favourite shows, play games and do more with the realme 9 smartphone. This mobile phone is equipped with a massive 5000 mAh battery that allows you to indulge in entertainment throughout the day. Also, this mobile phone has a powerful Snapdragon 680 Processor to offer smooth and easy multitasking performance. Moreover, thanks to the realme UI 3.0, you can enjoy easy upgrades and optimised features on this phone.",
    price: 10999,
    image:
      "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/9/q/j/-original-imagk4nzwhudqhcz.jpeg?q=70",
  },
  {
    name: "APPLE iPhone 11 (Black, 128 GB)",
    type: "MOBILE",
    features: [
      "128 GB ROM",
      "15.49 cm (6.1 inch) Liquid Retina HD Display",
      "12MP + 12MP | 12MP Front Camera",
      "A13 Bionic Chip Processor",
    ],
    description:
      "The iPhone 11 boasts a gorgeous all-screen Liquid Retina LCD that is water resistant up to 2 metres for up to 30 minutes. Moreover, the ultra-wide 13 mm lens has a 120-degree field of view for four times more scenes, and the 26 mm wide lens provides up to 100% Autofocus in low light.",
    price: 44999,
    image:
      "https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70",
  },
  {
    name: "SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV with 2022 Model  (UA32T4380AKXXL)",
    type: "TV",
    features: [
      "Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube",
      "Operating System: Tizen",
      "Resolution: HD Ready 1366 x 768 Pixels",
      "Sound Output: 20 W",
      "Refresh Rate: 50 Hz",
    ],
    description:
      "With this Samsung TV, every image on the screen comes to life, giving you a home theatre experience. With the HD visual quality of this TV, you can enjoy vibrant movie scenes. Additionally, HDR increases the screen's brightness and brings out the subtleties of the material. Moreover, the Contrast Enhancer on this TV improves contrast and offers superb image quality with increased depth.",
    price: 13490,
    image:
      "https://rukminim1.flixcart.com/image/416/416/xif0q/television/w/a/3/-original-imagg48gk4gzgsag.jpeg?q=70",
  },
  {
    name: "Mi 5A 80 cm (32 inch) HD Ready LED Smart Android TV with Dolby Audio (2022 Model)",
    type: "TV",
    features: [
      "Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube",
      "Operating System: Tizen",
      "Resolution: HD Ready 1366 x 768 Pixels",
      "Sound Output: 20 W",
      "Refresh Rate: 50 Hz",
    ],
    description:
      "With this Samsung TV, every image on the screen comes to life, giving you a home theatre experience. With the HD visual quality of this TV, you can enjoy vibrant movie scenes. Additionally, HDR increases the screen's brightness and brings out the subtleties of the material. Moreover, the Contrast Enhancer on this TV improves contrast and offers superb image quality with increased depth.",
    price: 13999,
    image:
      "https://rukminim1.flixcart.com/image/416/416/l2ghgnk0/television/u/a/c/l32m7-5ain-mi-original-imagdsdwqf6bkmkz.jpeg?q=70",
  },
  {
    name: "LG 80 cm (32 inch) HD Ready LED Smart WebOS TV  (32LM565BPTA)",
    type: "TV",
    features: [
      "Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube",
      "Operating System: Tizen",
      "Resolution: HD Ready 1366 x 768 Pixels",
      "Sound Output: 20 W",
      "Refresh Rate: 50 Hz",
    ],
    description:
      "With this Samsung TV, every image on the screen comes to life, giving you a home theatre experience. With the HD visual quality of this TV, you can enjoy vibrant movie scenes. Additionally, HDR increases the screen's brightness and brings out the subtleties of the material. Moreover, the Contrast Enhancer on this TV improves contrast and offers superb image quality with increased depth.",
    price: 13990,
    image:
      "https://rukminim1.flixcart.com/image/416/416/l0fm07k0/television/7/x/9/-original-imagc8fnpx39evgc.jpeg?q=70",
  },
  {
    name: "OnePlus Y1S 108 cm (43 inch) Full HD LED Smart Android TV with Android 11 and Bezel-Less Frame  (43FD2A00)",
    type: "TV",
    features: [
      "Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube",
      "Operating System: Tizen",
      "Resolution: HD Ready 1366 x 768 Pixels",
      "Sound Output: 20 W",
      "Refresh Rate: 50 Hz",
    ],
    description:
      "With this Samsung TV, every image on the screen comes to life, giving you a home theatre experience. With the HD visual quality of this TV, you can enjoy vibrant movie scenes. Additionally, HDR increases the screen's brightness and brings out the subtleties of the material. Moreover, the Contrast Enhancer on this TV improves contrast and offers superb image quality with increased depth.",
    price: 24999,
    image:
      "https://rukminim1.flixcart.com/image/416/416/kzfvzww0/television/g/4/k/43fd2a00-43-y1s-oneplus-original-imagbgc44gerfphz.jpeg?q=70",
  },
  {
    name: "Infinix Y1 80 cm (32 inch) HD Ready LED Smart Linux TV  (32Y1)",
    type: "TV",
    features: [
      "Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube",
      "Operating System: Tizen",
      "Resolution: HD Ready 1366 x 768 Pixels",
      "Sound Output: 20 W",
      "Refresh Rate: 50 Hz",
    ],
    description:
      "With this Samsung TV, every image on the screen comes to life, giving you a home theatre experience. With the HD visual quality of this TV, you can enjoy vibrant movie scenes. Additionally, HDR increases the screen's brightness and brings out the subtleties of the material. Moreover, the Contrast Enhancer on this TV improves contrast and offers superb image quality with increased depth.",
    price: 8999,
    image:
      "https://rukminim1.flixcart.com/image/416/416/l572ufk0/television/e/f/g/32y1-32y1-infinix-original-imagfxczrxjjwxvf.jpeg?q=70",
  },
  {
    name: "Adsun Smart Series 60 cm (24 inch) HD Ready LED Smart Android Based TV  (A-2440S)",
    type: "TV",
    features: [
      "Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube",
      "Operating System: Tizen",
      "Resolution: HD Ready 1366 x 768 Pixels",
      "Sound Output: 20 W",
      "Refresh Rate: 50 Hz",
    ],
    description:
      "With this Samsung TV, every image on the screen comes to life, giving you a home theatre experience. With the HD visual quality of this TV, you can enjoy vibrant movie scenes. Additionally, HDR increases the screen's brightness and brings out the subtleties of the material. Moreover, the Contrast Enhancer on this TV improves contrast and offers superb image quality with increased depth.",
    price: 6640,
    image:
      "https://rukminim1.flixcart.com/image/416/416/kzn17680/television/j/f/u/a-2440s-adsun-original-imagbhqzg9ea4cg5.jpeg?q=70",
  },
  {
    name: "Infinix INBook X2 Plus Core i5 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) XL25 Thin and Light Laptop  (15.6 Inch, Blue, 1.58 Kg)",
    type: "LAPTOP",
    features: [
      "Stylish & Portable Thin and Light Laptop",
      "15.6 Inch IPS FHD Display (300nits peak brightness, 100% sRGB, NTSC 72%)",
      "Light Laptop without Optical Disk Drive",
    ],
    description:
      "The Infinix INBook X2 Plus laptop has an extremely slender design and is only 14.9 mm thick. It is easy to travel with because it only weighs 1.58 kg. Additionally, to save time, its 65 W USB Type-C fast charger can charge this laptop to 65% of its capacity in just 60 minutes. Additionally, you can charge your smartphone with its multi-utility charger, eliminating the need for two separate charges when you're travelling.",
    price: 42990,
    image:
      "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/i/f/r/-original-imagjfgyxmcz7scf.jpeg?q=70",
  },
  {
    name: "ASUS VivoBook 15 (2022) Core i3 10th Gen - (8 GB/512 GB SSD/Windows 11 Home) X515JA-EJ362WS | X515JA-EJ392WS Thin and Light Laptop",
    type: "LAPTOP",
    features: [
      "Stylish & Portable Thin and Light Laptop",
      "15.6 Inch IPS FHD Display (300nits peak brightness, 100% sRGB, NTSC 72%)",
      "Light Laptop without Optical Disk Drive",
    ],
    description:
      "The Infinix INBook X2 Plus laptop has an extremely slender design and is only 14.9 mm thick. It is easy to travel with because it only weighs 1.58 kg. Additionally, to save time, its 65 W USB Type-C fast charger can charge this laptop to 65% of its capacity in just 60 minutes. Additionally, you can charge your smartphone with its multi-utility charger, eliminating the need for two separate charges when you're travelling.",
    price: 32990,
    image:
      "ASUS VivoBook 15 (2022) Core i3 10th Gen - (8 GB/512 GB SSD/Windows 11 Home) X515JA-EJ362WS | X515JA-EJ392WS Thin and Light Laptop",
  },
  {
    name: "RedmiBook Pro Core i3 11th Gen - (8 GB/256 GB SSD/Windows 11 Home) Thin and Light Laptop  (15.6 inch, Charcoal Gray, 1.8 kg, With MS Office)",
    type: "LAPTOP",
    features: [
      "Stylish & Portable Thin and Light Laptop",
      "15.6 Inch IPS FHD Display (300nits peak brightness, 100% sRGB, NTSC 72%)",
      "Light Laptop without Optical Disk Drive",
    ],
    description:
      "The Infinix INBook X2 Plus laptop has an extremely slender design and is only 14.9 mm thick. It is easy to travel with because it only weighs 1.58 kg. Additionally, to save time, its 65 W USB Type-C fast charger can charge this laptop to 65% of its capacity in just 60 minutes. Additionally, you can charge your smartphone with its multi-utility charger, eliminating the need for two separate charges when you're travelling.",
    price: 28990,
    image:
      "https://rukminim1.flixcart.com/image/416/416/krxtrww0/computer/e/l/c/redmibook-15-e-learning-edition-thin-and-light-laptop-redmi-original-imag5m8jkjbaybeu.jpeg?q=70",
  },
  {
    name: "Lenovo IdeaPad 3 Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home)",
    type: "LAPTOP",
    features: [
      "Stylish & Portable Thin and Light Laptop",
      "15.6 Inch IPS FHD Display (300nits peak brightness, 100% sRGB, NTSC 72%)",
      "Light Laptop without Optical Disk Drive",
    ],
    description:
      "The Infinix INBook X2 Plus laptop has an extremely slender design and is only 14.9 mm thick. It is easy to travel with because it only weighs 1.58 kg. Additionally, to save time, its 65 W USB Type-C fast charger can charge this laptop to 65% of its capacity in just 60 minutes. Additionally, you can charge your smartphone with its multi-utility charger, eliminating the need for two separate charges when you're travelling.",
    price: 38789,
    image:
      "https://rukminim1.flixcart.com/image/416/416/kruyw7k0/computer/f/i/u/na-thin-and-light-laptop-lenovo-original-imag5jy6fsm2yx4q.jpeg?q=70",
  },
  {
    name: "Lenovo IdeaPad 3 Ryzen 5 Hexa Core 5500U",
    type: "LAPTOP",
    features: [
      "Stylish & Portable Thin and Light Laptop",
      "15.6 Inch IPS FHD Display (300nits peak brightness, 100% sRGB, NTSC 72%)",
      "Light Laptop without Optical Disk Drive",
    ],
    description:
      "The Infinix INBook X2 Plus laptop has an extremely slender design and is only 14.9 mm thick. It is easy to travel with because it only weighs 1.58 kg. Additionally, to save time, its 65 W USB Type-C fast charger can charge this laptop to 65% of its capacity in just 60 minutes. Additionally, you can charge your smartphone with its multi-utility charger, eliminating the need for two separate charges when you're travelling.",
    price: 43575,
    image:
      "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/2/3/5/-original-imagg5hhjunrv4e4.jpeg?q=70",
  },
  {
    name: "APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A  (13.3 inch, Space Grey, 1.29 kg)",
    type: "LAPTOP",
    features: [
      "Stylish & Portable Thin and Light Laptop",
      "15.6 Inch IPS FHD Display (300nits peak brightness, 100% sRGB, NTSC 72%)",
      "Light Laptop without Optical Disk Drive",
    ],
    description:
      "The Infinix INBook X2 Plus laptop has an extremely slender design and is only 14.9 mm thick. It is easy to travel with because it only weighs 1.58 kg. Additionally, to save time, its 65 W USB Type-C fast charger can charge this laptop to 65% of its capacity in just 60 minutes. Additionally, you can charge your smartphone with its multi-utility charger, eliminating the need for two separate charges when you're travelling.",
    price: 88990,
    image:
      "https://rukminim1.flixcart.com/image/416/416/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70",
  },
];

module.exports = data;
