if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const r=e=>a(e,n),d={module:{uri:n},exports:o,require:r};s[n]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(c(...e),o)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/559-46d793d61a0f1f63.js",revision:"46d793d61a0f1f63"},{url:"/_next/static/chunks/593-36f2fe9a9b3791c1.js",revision:"36f2fe9a9b3791c1"},{url:"/_next/static/chunks/640-1b7e2e0871e1d098.js",revision:"1b7e2e0871e1d098"},{url:"/_next/static/chunks/66-cba43f0b6977dada.js",revision:"cba43f0b6977dada"},{url:"/_next/static/chunks/785-8025228a2df4772c.js",revision:"8025228a2df4772c"},{url:"/_next/static/chunks/967-02d0d576dee62689.js",revision:"02d0d576dee62689"},{url:"/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/_next/static/chunks/main-5e3622d04d8f5315.js",revision:"5e3622d04d8f5315"},{url:"/_next/static/chunks/pages/404-8a6d0f741a783172.js",revision:"8a6d0f741a783172"},{url:"/_next/static/chunks/pages/_app-0854476bf655d0d2.js",revision:"0854476bf655d0d2"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/about-cd90153dae1cc423.js",revision:"cd90153dae1cc423"},{url:"/_next/static/chunks/pages/account-058c7c9a70728622.js",revision:"058c7c9a70728622"},{url:"/_next/static/chunks/pages/account/address-ebad47b5b701a283.js",revision:"ebad47b5b701a283"},{url:"/_next/static/chunks/pages/account/favorites-6112bbb16324ec4a.js",revision:"6112bbb16324ec4a"},{url:"/_next/static/chunks/pages/account/orders-21bf9e6b1731ab9b.js",revision:"21bf9e6b1731ab9b"},{url:"/_next/static/chunks/pages/account/settings-185252f93ca2c126.js",revision:"185252f93ca2c126"},{url:"/_next/static/chunks/pages/account/viewed-a2878a3580917fd1.js",revision:"a2878a3580917fd1"},{url:"/_next/static/chunks/pages/accountSuccess-6600e21a7115a92c.js",revision:"6600e21a7115a92c"},{url:"/_next/static/chunks/pages/blog-0382649f5a91d7fb.js",revision:"0382649f5a91d7fb"},{url:"/_next/static/chunks/pages/blog/sample-f690a6e731dff154.js",revision:"f690a6e731dff154"},{url:"/_next/static/chunks/pages/cart-ad527a47abdd736e.js",revision:"ad527a47abdd736e"},{url:"/_next/static/chunks/pages/faq-100b20b6dbf3950d.js",revision:"100b20b6dbf3950d"},{url:"/_next/static/chunks/pages/forgot-088e4b8977702e17.js",revision:"088e4b8977702e17"},{url:"/_next/static/chunks/pages/how-to-use-d454a2a2232161d2.js",revision:"d454a2a2232161d2"},{url:"/_next/static/chunks/pages/index-3dfe966fa256c8b1.js",revision:"3dfe966fa256c8b1"},{url:"/_next/static/chunks/pages/login-37c289f9662965ff.js",revision:"37c289f9662965ff"},{url:"/_next/static/chunks/pages/orderConfirm-4b580972cec9e287.js",revision:"4b580972cec9e287"},{url:"/_next/static/chunks/pages/product/sample-cd347d91db6882ca.js",revision:"cd347d91db6882ca"},{url:"/_next/static/chunks/pages/search-dd48a57a9095906d.js",revision:"dd48a57a9095906d"},{url:"/_next/static/chunks/pages/shop-a6277e597a4cc5b5.js",revision:"a6277e597a4cc5b5"},{url:"/_next/static/chunks/pages/shopV2-288ef2b0f937b2c9.js",revision:"288ef2b0f937b2c9"},{url:"/_next/static/chunks/pages/signup-8670b038d168e21f.js",revision:"8670b038d168e21f"},{url:"/_next/static/chunks/pages/styling-80f43d03e5a954c3.js",revision:"80f43d03e5a954c3"},{url:"/_next/static/chunks/pages/support-3316222e2b81b182.js",revision:"3316222e2b81b182"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-ee7e63bc15b31913.js",revision:"ee7e63bc15b31913"},{url:"/_next/static/css/0378070f860ab695.css",revision:"0378070f860ab695"},{url:"/_next/static/css/039d2e92703dbead.css",revision:"039d2e92703dbead"},{url:"/_next/static/css/1bccc81125583342.css",revision:"1bccc81125583342"},{url:"/_next/static/css/1f25f90d8a44eff9.css",revision:"1f25f90d8a44eff9"},{url:"/_next/static/css/2666b4924bfa0171.css",revision:"2666b4924bfa0171"},{url:"/_next/static/css/27f6846bb140ba2c.css",revision:"27f6846bb140ba2c"},{url:"/_next/static/css/2b11399eab5fd2de.css",revision:"2b11399eab5fd2de"},{url:"/_next/static/css/3120baabb5caad89.css",revision:"3120baabb5caad89"},{url:"/_next/static/css/393ec2d3519227ac.css",revision:"393ec2d3519227ac"},{url:"/_next/static/css/39ded05709c70a26.css",revision:"39ded05709c70a26"},{url:"/_next/static/css/3ff837062e538fe0.css",revision:"3ff837062e538fe0"},{url:"/_next/static/css/4634ba59c0f6ef92.css",revision:"4634ba59c0f6ef92"},{url:"/_next/static/css/5035ea6c55aff28a.css",revision:"5035ea6c55aff28a"},{url:"/_next/static/css/6ee5948a83950b08.css",revision:"6ee5948a83950b08"},{url:"/_next/static/css/6f665513da8ddbb9.css",revision:"6f665513da8ddbb9"},{url:"/_next/static/css/85e0aba6df34148e.css",revision:"85e0aba6df34148e"},{url:"/_next/static/css/91f878fb42437b34.css",revision:"91f878fb42437b34"},{url:"/_next/static/css/9f036dccbbab5959.css",revision:"9f036dccbbab5959"},{url:"/_next/static/css/a445f7345270d926.css",revision:"a445f7345270d926"},{url:"/_next/static/css/b1df6450a0da168e.css",revision:"b1df6450a0da168e"},{url:"/_next/static/css/b85fc2fbb46b9b00.css",revision:"b85fc2fbb46b9b00"},{url:"/_next/static/css/bec2aefa7e0ab2b0.css",revision:"bec2aefa7e0ab2b0"},{url:"/_next/static/css/c5a4a0457269aaab.css",revision:"c5a4a0457269aaab"},{url:"/_next/static/css/fccd3a56ce8bf1df.css",revision:"fccd3a56ce8bf1df"},{url:"/_next/static/css/fef856cfa3851df3.css",revision:"fef856cfa3851df3"},{url:"/_next/static/kp9E_q-OkTGq5eE6zh9gA/_buildManifest.js",revision:"47226e8b46ede4df47e8b0fa78646d79"},{url:"/_next/static/kp9E_q-OkTGq5eE6zh9gA/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/about.png",revision:"141cebb7157a2742cb32ee2e4063a25e"},{url:"/about1.png",revision:"afce64bfa5e1ee8c8313f1733f320aa3"},{url:"/about2.png",revision:"171e1c63b504aa3c3711de920172cec8"},{url:"/about3.png",revision:"54c1bb9a5a6af0d162872d859e9c1c36"},{url:"/amex.png",revision:"6aef602b777432385808bfcf2fefa5db"},{url:"/banner1.png",revision:"8e280b170e67e1dd92dde1c1a7f1a6c4"},{url:"/banner2.png",revision:"89ae24fb0718ba3af412cf14a53ea6eb"},{url:"/banner3.png",revision:"757e9d27905f069638ab20d9fcfd8d76"},{url:"/blogCover.png",revision:"72adf689f9cd6370138d1e8471c2cf0f"},{url:"/blogFeatured.png",revision:"ed0469803844f09aad020b7eb75bcce8"},{url:"/blogs/blog1.png",revision:"5ea016b8259716df35c1846204cd0c58"},{url:"/blogs/blog2.png",revision:"2b6e23a4701b73d70c220f73312d13bb"},{url:"/blogs/blog3.png",revision:"214d86648ba513840f9ed3b16104552b"},{url:"/brand.png",revision:"0d06e5bb556e908f85c7034be97e4f71"},{url:"/cloth.png",revision:"6b1df6023a276054fc04eca97c1d0345"},{url:"/collections/collection1.png",revision:"78bf6a361966f9a41ed913d8ebc99f15"},{url:"/collections/collection2.png",revision:"3e4fd5ee9c489aa5a0667678f0d73061"},{url:"/collections/collection3.png",revision:"6bbf7aa602be168590041be7ff386bf5"},{url:"/collections/collection4.png",revision:"178708512acce03c0def777bce91f403"},{url:"/default-logo.png",revision:"42ca33497190cc60f6de368a4c108271"},{url:"/faqCover.png",revision:"e56e8737287e4334d1d7945edcc6f41c"},{url:"/favicon.ico",revision:"8fbf0901824f3cc5f0968873db1d83f9"},{url:"/headerPic1.png",revision:"ab910e90929769b5054de9e00a8b1252"},{url:"/headerPic2.png",revision:"1c7982088900aeac7b38f58dc17c6674"},{url:"/highlight.png",revision:"610a5442b23e1cc6efb0690f797381d5"},{url:"/highlightmin.png",revision:"0d950fcf2e952dbfcc07850afecc7d68"},{url:"/how-to-use/jamm-sydney-1upd@2x.png",revision:"256ae08265df147ff1b6080a2738a2c6"},{url:"/how-to-use/logos@2x.png",revision:"3df84e83df4fbbdf000d7594f5e05690"},{url:"/master.png",revision:"a2cd80038d68a2a595135e2d514e1ac4"},{url:"/products/pdp1.jpeg",revision:"2e29fa4c68a4eb05a36404cad423c7fb"},{url:"/products/pdp2.jpeg",revision:"9657f37ef0739f2da2dde178c8eafd1f"},{url:"/products/pdp3.jpeg",revision:"e1517507270871cfdc7feae73d55468a"},{url:"/products/pdp4.jpeg",revision:"f0ceadb7108d382620572622ceec9a49"},{url:"/products/shirt1.jpg",revision:"66528d1ef6442e6867ee8b9bc2680474"},{url:"/products/shirt2.jpg",revision:"8af2e18d040cf6eeb0dd414f24781c89"},{url:"/products/shirt3.jpg",revision:"383c530f528e8dcabd36327bdde2177f"},{url:"/products/woman1.jpeg",revision:"70ddd66637d0c08fcbea93ab9e8f10b9"},{url:"/products/woman2.jpeg",revision:"358438c0f77e86475bdd1444714938af"},{url:"/products/woman3.jpeg",revision:"a7b6a87f52e26ff7641bcfddf08a389d"},{url:"/products/woman4.jpeg",revision:"740a0581abdfdd7bb5924b222be6369d"},{url:"/products/woman5.jpeg",revision:"2b6d7eb7412de4f298ccfd818adf02e0"},{url:"/products/woman6.jpeg",revision:"97783afe2ad7d4c6c84261e834c535cc"},{url:"/pwa-assets/android-chrome-192x192.png",revision:"e4e0a30c64d6712b3daa8d55daaebdc5"},{url:"/pwa-assets/android-chrome-384x384.png",revision:"8dfcd1726be0e2670e6e468e17fe1965"},{url:"/pwa-assets/apple-touch-icon-precomposed.png",revision:"cbe5c298ad5ec799a1f83bf2e4f34e64"},{url:"/pwa-assets/apple-touch-icon.png",revision:"649facdb018aa618e97ab4bda899b271"},{url:"/pwa-assets/browserconfig.xml",revision:"8ba6dc09b93de6e0644ce6cccaf15e0b"},{url:"/pwa-assets/favicon-16x16.png",revision:"37485d6495af7b43334628a4070502d6"},{url:"/pwa-assets/favicon-194x194.png",revision:"d1c19444b99fcf6c0f649668aa5aa501"},{url:"/pwa-assets/favicon-32x32.png",revision:"4fc19a8d508c6f12ce0b866dc70089e8"},{url:"/pwa-assets/favicon.ico",revision:"8fbf0901824f3cc5f0968873db1d83f9"},{url:"/pwa-assets/icons/android/android-launchericon-144-144.png",revision:"a33254bc7a1278e607060c3d6229319b"},{url:"/pwa-assets/icons/android/android-launchericon-192-192.png",revision:"2764126f6ade77dc08a0008212c479fc"},{url:"/pwa-assets/icons/android/android-launchericon-48-48.png",revision:"04b48daabe5ac221982447dc95a18ea0"},{url:"/pwa-assets/icons/android/android-launchericon-512-512.png",revision:"42ca33497190cc60f6de368a4c108271"},{url:"/pwa-assets/icons/android/android-launchericon-72-72.png",revision:"b570b0cc3a702d8f31cd39eb74e49a5b"},{url:"/pwa-assets/icons/android/android-launchericon-96-96.png",revision:"7464437eb335647cad0b3330ecb81884"},{url:"/pwa-assets/icons/ios/100.png",revision:"3fb78a90c5b20aa79df5f4499e3aa9a8"},{url:"/pwa-assets/icons/ios/1024.png",revision:"277f858e4cd20bb13c3ba64ebdcbf8ea"},{url:"/pwa-assets/icons/ios/114.png",revision:"0fb22bdbd39b7613e414dec47f8a4aa3"},{url:"/pwa-assets/icons/ios/120.png",revision:"88d3067b3414ab6e19d93f206c6beaa4"},{url:"/pwa-assets/icons/ios/128.png",revision:"cd283fc116a61374c26771ff00bd9400"},{url:"/pwa-assets/icons/ios/144.png",revision:"a33254bc7a1278e607060c3d6229319b"},{url:"/pwa-assets/icons/ios/152.png",revision:"fe60e26a337d2d0a30e9f839b1f2e6c3"},{url:"/pwa-assets/icons/ios/16.png",revision:"54085a13513a20efba5896457e0cd85c"},{url:"/pwa-assets/icons/ios/167.png",revision:"d146308532c1108f8d4786179e0e945c"},{url:"/pwa-assets/icons/ios/180.png",revision:"9792ed740409f483d5e6750209b3e5ed"},{url:"/pwa-assets/icons/ios/192.png",revision:"2764126f6ade77dc08a0008212c479fc"},{url:"/pwa-assets/icons/ios/20.png",revision:"bc16e13da392c1a4913c4c1d21cae496"},{url:"/pwa-assets/icons/ios/256.png",revision:"1768ee246db5b9782e4f4e60973bc2db"},{url:"/pwa-assets/icons/ios/29.png",revision:"24efd47d47ac749f0a4cea97942e230f"},{url:"/pwa-assets/icons/ios/32.png",revision:"280ecc0f423c1dc55e1e1877cd2af79a"},{url:"/pwa-assets/icons/ios/40.png",revision:"f384de5add337c26c430909a5ce40a3a"},{url:"/pwa-assets/icons/ios/50.png",revision:"7fec2a767f17d05cea48a69b11f9b36a"},{url:"/pwa-assets/icons/ios/512.png",revision:"42ca33497190cc60f6de368a4c108271"},{url:"/pwa-assets/icons/ios/57.png",revision:"1183741cdacf7fc439b898cfbb0b7609"},{url:"/pwa-assets/icons/ios/58.png",revision:"dfc8ef68dad2105df65827f9b2c75da7"},{url:"/pwa-assets/icons/ios/60.png",revision:"51d853df822f32d0fe68190af6ac03a5"},{url:"/pwa-assets/icons/ios/64.png",revision:"50395b2d1e2618a58ec81aacf4cb2745"},{url:"/pwa-assets/icons/ios/72.png",revision:"b570b0cc3a702d8f31cd39eb74e49a5b"},{url:"/pwa-assets/icons/ios/76.png",revision:"356702f4d17fb0efd7c78da84bdc15ba"},{url:"/pwa-assets/icons/ios/80.png",revision:"886932b60810e4879952e0e8b6a41225"},{url:"/pwa-assets/icons/ios/87.png",revision:"358cc3f0f44c784558bcf90f2a710b6d"},{url:"/pwa-assets/icons/windows11/LargeTile.scale-100.png",revision:"571114f13757dfe5d0e3a045ea517ee0"},{url:"/pwa-assets/icons/windows11/LargeTile.scale-125.png",revision:"64cd6bddab06b831c2a57cdfa4df4b2e"},{url:"/pwa-assets/icons/windows11/LargeTile.scale-150.png",revision:"dddb24ba0b23344881f1058df25cec84"},{url:"/pwa-assets/icons/windows11/LargeTile.scale-200.png",revision:"b4b98f3f7eb9f33106025f5cd4922c46"},{url:"/pwa-assets/icons/windows11/LargeTile.scale-400.png",revision:"36e9dc4b04c47156a4445bd5477af328"},{url:"/pwa-assets/icons/windows11/SmallTile.scale-100.png",revision:"990e33421b022af54d88519e6d076a12"},{url:"/pwa-assets/icons/windows11/SmallTile.scale-125.png",revision:"c200b8c09f5238cad27b2132786d50ea"},{url:"/pwa-assets/icons/windows11/SmallTile.scale-150.png",revision:"d5f199efedff807b7bc5b8b4d7710bba"},{url:"/pwa-assets/icons/windows11/SmallTile.scale-200.png",revision:"791b32a80bbc0f142e125f91f45519c8"},{url:"/pwa-assets/icons/windows11/SmallTile.scale-400.png",revision:"2d75f21be95d23147422a096994a1f42"},{url:"/pwa-assets/icons/windows11/SplashScreen.scale-100.png",revision:"c676ee31752cdd1d2470ead96e157472"},{url:"/pwa-assets/icons/windows11/SplashScreen.scale-125.png",revision:"91915250bb52cd20aaa17870b0deceda"},{url:"/pwa-assets/icons/windows11/SplashScreen.scale-150.png",revision:"485de2357d7cf4795e1b2451bef6ae40"},{url:"/pwa-assets/icons/windows11/SplashScreen.scale-200.png",revision:"772812284e77d328f51ef650e285ed85"},{url:"/pwa-assets/icons/windows11/SplashScreen.scale-400.png",revision:"104cb79ac4a884fac7e367823ab81598"},{url:"/pwa-assets/icons/windows11/Square150x150Logo.scale-100.png",revision:"cad68ec53a643ca59f0f3c154eecfa38"},{url:"/pwa-assets/icons/windows11/Square150x150Logo.scale-125.png",revision:"2887b07d3a876da78cb0c2d420a8012b"},{url:"/pwa-assets/icons/windows11/Square150x150Logo.scale-150.png",revision:"4cfb1a5c95d0e5e6917d129a27356531"},{url:"/pwa-assets/icons/windows11/Square150x150Logo.scale-200.png",revision:"ad2830d8e5b392b1769dcccb100e3c6b"},{url:"/pwa-assets/icons/windows11/Square150x150Logo.scale-400.png",revision:"350a662d290c40551d887c277c42a009"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"7dcde5a3b021e577cd6c4d4574ec9bdc"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"66dd872695bb0e97ce3639662838cc03"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"da934caaddea0a631f669c5b02b3962a"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"248b88399635387f30b5944f2332c29f"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"adde803fd3e288940ad38c7a44dcaeea"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"929cc94416de81e38b1c983425988b53"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"ffc67ba3cc98aaba4e5984ac8aa18e4d"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"148bd0a4681eecf7f6daac5b1181fd49"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"5c82083f04c4b392e3b495138da1b022"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"07079d19a7f70ca267dc146e40d07d7f"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"710d5f13f32afc11831ee8e46ea4462a"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"0b20a70af4566d32ec32fde9602c1718"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"2b6469846f441d2e15993b2898f8f635"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"3f846c70a6305d278f48804ee5d64380"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"aaf0008a409cbd7ea88be65893e0c307"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"7dcde5a3b021e577cd6c4d4574ec9bdc"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"66dd872695bb0e97ce3639662838cc03"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"da934caaddea0a631f669c5b02b3962a"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"248b88399635387f30b5944f2332c29f"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"adde803fd3e288940ad38c7a44dcaeea"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"929cc94416de81e38b1c983425988b53"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"ffc67ba3cc98aaba4e5984ac8aa18e4d"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"148bd0a4681eecf7f6daac5b1181fd49"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"5c82083f04c4b392e3b495138da1b022"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"07079d19a7f70ca267dc146e40d07d7f"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"710d5f13f32afc11831ee8e46ea4462a"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"0b20a70af4566d32ec32fde9602c1718"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"2b6469846f441d2e15993b2898f8f635"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"3f846c70a6305d278f48804ee5d64380"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"aaf0008a409cbd7ea88be65893e0c307"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.scale-100.png",revision:"5c82083f04c4b392e3b495138da1b022"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.scale-125.png",revision:"1c6e85ff1fbb06a0d789dbf50c293cff"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.scale-150.png",revision:"aa1624042c7aa43c267be2985954f2d1"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.scale-200.png",revision:"adf783b0dec27942656285c8d0165d44"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.scale-400.png",revision:"759c16aa24eeaeabaf31cc5bf0f26f81"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.targetsize-16.png",revision:"7dcde5a3b021e577cd6c4d4574ec9bdc"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.targetsize-20.png",revision:"66dd872695bb0e97ce3639662838cc03"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.targetsize-24.png",revision:"da934caaddea0a631f669c5b02b3962a"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.targetsize-256.png",revision:"248b88399635387f30b5944f2332c29f"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.targetsize-30.png",revision:"adde803fd3e288940ad38c7a44dcaeea"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.targetsize-32.png",revision:"929cc94416de81e38b1c983425988b53"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.targetsize-36.png",revision:"ffc67ba3cc98aaba4e5984ac8aa18e4d"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.targetsize-40.png",revision:"148bd0a4681eecf7f6daac5b1181fd49"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.targetsize-44.png",revision:"5c82083f04c4b392e3b495138da1b022"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.targetsize-48.png",revision:"07079d19a7f70ca267dc146e40d07d7f"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.targetsize-60.png",revision:"710d5f13f32afc11831ee8e46ea4462a"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.targetsize-64.png",revision:"0b20a70af4566d32ec32fde9602c1718"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.targetsize-72.png",revision:"2b6469846f441d2e15993b2898f8f635"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.targetsize-80.png",revision:"3f846c70a6305d278f48804ee5d64380"},{url:"/pwa-assets/icons/windows11/Square44x44Logo.targetsize-96.png",revision:"aaf0008a409cbd7ea88be65893e0c307"},{url:"/pwa-assets/icons/windows11/StoreLogo.scale-100.png",revision:"0b1ea8ab0f159fb83af0c8b4827750dc"},{url:"/pwa-assets/icons/windows11/StoreLogo.scale-125.png",revision:"966432ff502d73fa524121beb1895ffb"},{url:"/pwa-assets/icons/windows11/StoreLogo.scale-150.png",revision:"a5e33f1b5f2cf555cd45ffd9da15c809"},{url:"/pwa-assets/icons/windows11/StoreLogo.scale-200.png",revision:"133e9c9f2bf63bcd788b751778346f3e"},{url:"/pwa-assets/icons/windows11/StoreLogo.scale-400.png",revision:"2e0eb9b3369c34a3a6dd3de4187dbf65"},{url:"/pwa-assets/icons/windows11/Wide310x150Logo.scale-100.png",revision:"49f913643d3ab430d5f0f8027e65a955"},{url:"/pwa-assets/icons/windows11/Wide310x150Logo.scale-125.png",revision:"38ac5aa984710aaa047a277976c52d1a"},{url:"/pwa-assets/icons/windows11/Wide310x150Logo.scale-150.png",revision:"b019449865d22dcdd2154ff74cda4337"},{url:"/pwa-assets/icons/windows11/Wide310x150Logo.scale-200.png",revision:"c676ee31752cdd1d2470ead96e157472"},{url:"/pwa-assets/icons/windows11/Wide310x150Logo.scale-400.png",revision:"772812284e77d328f51ef650e285ed85"},{url:"/pwa-assets/mstile-150x150.png",revision:"93ca936080d3bedb130925a1ffbaa391"},{url:"/pwa-assets/screenshots/mobile.png",revision:"7fb9836741afe2cac53c367691cf72e8"},{url:"/pwa-assets/screenshots/screen1.png",revision:"790a5d9c0c0f1d08da5eff2cb666d057"},{url:"/pwa-assets/screenshots/screen2.png",revision:"c6a001ede1675a864e8fa91e28d58cf5"},{url:"/pwa-assets/screenshots/screen3.png",revision:"8f1e4fdc212c4e510e304805a32d5df1"},{url:"/pwa-assets/screenshots/screen4.png",revision:"b698f80fd00f4d3e5575df32149d24af"},{url:"/pwa-assets/screenshots/screen5.png",revision:"094162fe4a48926632bd5e274c281a75"},{url:"/pwa-assets/site.webmanifest",revision:"35b58b26163e8059e6a1395a476726de"},{url:"/robots.txt",revision:"0d804b0c3323da1b0de1f8a5be267d6f"},{url:"/service-worker.js",revision:"35b1ea8bc0544a436555e46cfa21ebba"},{url:"/social/socialMedia1.png",revision:"406638320f2e974ec2fb9fb8cfb3fa3d"},{url:"/social/socialMedia2.png",revision:"282ce247f22a09da79e27476fc935b42"},{url:"/social/socialMedia3.png",revision:"3bcbf0001758e06ef00f18f4340e2790"},{url:"/social/socialMedia4.png",revision:"0838ba6fc7cc19a3c588b993313bf267"},{url:"/support.png",revision:"9dd5dd9f924a04a0a51a83c758e25bb3"},{url:"/visa.png",revision:"8ee6368b54a88b6d0a14219b859725d4"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));