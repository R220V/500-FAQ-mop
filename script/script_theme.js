
function setTheme(theme) {
  const root = document.documentElement;

  const themes = {
    
    
    red: {
      '--bg': '#fdeaea',
      '--card': '#fff5f5ff',
      '--card-alt': '#fdddddff',
       '--card-accent':'#fff0f0ff',
      '--text': '#520d0dff',
      '--text-logo': '#ff3737ff',
      '--text-alt': '#ffffff',
      '--accent': '#ff3333',
      '--stroke': '#5a0a0a',
      '--code-bg': '#ecc3c3ff'
    },
   
  orange: {
    '--bg': '#fff2e6',
    '--card': '#fcebddff',
    '--card-alt': '#f5cca6ff',
    '--card-accent':'#ffffffff',
    '--text': '#4d2600',
    '--text-logo': '#915901ff',
    '--text-alt': '#131212ff',
    '--accent': '#4e2c00ff',
    '--stroke': '#663300',
    '--code-bg': '#fce3caff'
  },
  yellow: {
    '--bg': '#ffffe3ff',
    '--card': '#ffffffff',
    '--card-alt': '#e4d79fff',
    '--card-accent':'#fffff3ff',
    '--text': '#413801ff',
      '--text-logo': '#000000ff',
    '--text-alt': '#000000',
    '--accent': '#6b6a14ff',
    '--stroke': '#242424ff',
    '--code-bg': '#faee98ff'
  },
  green: {
    '--bg': '#ebffebff',
    '--card': '#f7fff1ff',
    '--card-alt': '#deffd6ff',
      '--card-accent':'#e5ffedff',
    '--text': '#0f3d0f',
     '--text-logo': '#005e05ff',
    '--text-alt': '#000000ff',
    '--accent': '#026e02ff',
    '--stroke': '#0a5a0a',
    '--code-bg': '#c8e0c5ff'
  },
  skyblue: {
    '--bg': '#d9e9ffff',
    '--card': '#f9fbfdff',
    '--card-alt': '#b9d1e7ff',
    '--card-accent':'#eaebfdff',
    '--text': '#025891ff',
    '--text-logo': '#1c6cd4ff',
    '--text-alt': '#0f1f3d',
    '--accent': '#4394ffff',
    '--stroke': '#0a1a5a',
    '--code-bg': '#b4cffdff'
  },
   blue: {
    '--bg': '#a7cdffff',
    '--card': '#c3dbffff',
    '--card-alt': '#92b6f7ff',
     '--card-accent':'#e5eeffff',
    '--text': '#080077ff',
    '--text-logo':'#000a44ff ',
    '--text-alt': '#002e99ff',
    '--accent': '#3388cc',
    '--stroke': '#0a1a5a',
    '--code-bg': '#9dbfffff'
  },
  purple: {
    '--bg': '#f4e6fd',
    '--card': '#ffffffd0',
    '--card-alt': '#be9dceff',
      '--card-accent':'#fce5ffff',
    '--text': '#641264ff',
    '--text-logo':'#611485ff ',
    '--text-alt': '#fdfdfdff',
    '--accent': '#cc00ffff',
    '--stroke': '#5a0a5a',
    '--code-bg': '#d3b2d3ff'
  },

  light: {
      '--bg': '#ffffffff',
      '--card': '#f9f9fa',
      '--card-alt': '#f0f0f0ff',
       '--card-accent':'#ffffffff',
      '--text': '#464545ff',
       '--text-logo':'#010416ff ',
      '--text-alt': '#ffffff',
      '--accent': '#5f5f5fff',
      '--stroke': '#0e1426',
      '--code-bg': '#ffffffff'
    },

    dark: {
      '--bg': '#0d1531ff',
      '--card': '#090735ff',
      '--card-alt': '#06050eff',
       '--card-accent':'#1f1f1fff',
      '--text': '#ddd9d9ff',
      '--text-logo':'#e9ecf1',
      '--text-alt': '#ffffff',
      '--accent': '#e2ecffff',
      '--stroke': '#26304a',
      '--code-bg': '#22252eff',
      '--bshadow': '0 0 10px 2px rgba(196, 243, 237, 0.56)'
    },

  };

  const selected = themes[theme];
  for (let key in selected) {
    root.style.setProperty(key, selected[key]);
  }
}
	
   
