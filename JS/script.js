// WEDE5020 POE FINAL - Alluring Florals - Uses YOUR exact image names
// POE 2.1 Interactive: tabs, accordion, modal, lightbox, animations
// POE 2.2 Dynamic Content: dynamic products, search, filter, sort, cart
// POE 3.1 SEO: alt text, meta, internal linking
// POE 4. Form Validation: enquiry + contact forms

document.addEventListener('DOMContentLoaded', () => {
  let cart = JSON.parse(localStorage.getItem('alluringCart') || '[]');
  const DELIVERY = 50;
  const save = () => localStorage.setItem('alluringCart', JSON.stringify(cart));

  // ====== YOUR EXACT IMAGE FOLDER - CASE SENSITIVE - THIS FIXES YOUR BUG ======
  const IMAGES = {
    Daffodil: 'images/Daffodil.jpg',
    Lilies: 'images/Lilies.jpg',
    Orchids: 'images/Orchids.jpg',
    Peonie: 'images/Peonie.jpg',
    Rose: 'images/rose.jpg', // you have lowercase rose.jpg
    Sunflower: 'images/sunflower.jpg', // you have lowercase
    Tulip: 'images/Tulip.jpg'
  };

  const BOUQUETS = [
    { name:'Daffodil Delight', type:'Daffodil', price:290, img:IMAGES.Daffodil },
    { name:'Lily Elegance', type:'Lilies', price:400, img:IMAGES.Lilies },
    { name:'Luxury Orchids', type:'Orchids', price:650, img:IMAGES.Orchids },
    { name:'Peonie Love', type:'Peonie', price:350, img:IMAGES.Peonie },
    { name:'Classic Rose', type:'Rose', price:310, img:IMAGES.Rose },
    { name:'Sunny Sunflower', type:'Sunflower', price:280, img:IMAGES.Sunflower },
    { name:'Tulip Dream', type:'Tulip', price:320, img:IMAGES.Tulip }
  ];

  // ====== HELPER TO FIND BUTTONS ======
  const findBtn = (t) => Array.from(document.querySelectorAll('button, a')).find(b=>b.innerText.toUpperCase().includes(t.toUpperCase()));

  // ====== 1. SHOP NOW BUTTON ======
  const shopNow = findBtn('SHOP NOW');
  if(shopNow){ shopNow.style.cursor='pointer'; shopNow.onclick=(e)=>{ e.preventDefault(); document.querySelector('#shop, #products, .product-grid')?.scrollIntoView({behavior:'smooth'}) || (location.href='shop.html'); }; }

  // ====== 2. DYNAMIC PRODUCT GRID - FIXES "Our Bouquets" EMPTY SCREEN ======
  let grid = document.querySelector('.product-grid, .bouquet-grid, .products, #products');
  if(!grid){
    const filterBar = findBtn('Sunflower')?.parentElement;
    grid = document.createElement('div');
    grid.className='product-grid';
    grid.style.cssText='display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:20px;padding:20px';
    (filterBar || document.querySelector('main') || document.body).after(grid);
  }

  function render(list){
    grid.innerHTML = list.map(p=>`
      <div class="card" data-name="${p.name}" data-price="${p.price}" style="background:white;border-radius:12px;padding:12px;border:1px solid #eee">
        <img src="${p.img}" alt="${p.name} - ${p.type} R${p.price} - Alluring Florals Durban KZN" style="width:100%;height:180px;object-fit:cover;border-radius:8px;cursor:pointer" onerror="this.onerror=null;this.src='https://via.placeholder.com/300?text=${p.name}'">
        <h3 style="margin:8px 0 2px">${p.name}</h3>
        <p>R${p.price} - ${p.type}</p>
        <button class="add" style="background:#7d0a2e;color:white;border:none;padding:8px 14px;border-radius:20px;cursor:pointer;margin-right:6px">ADD TO CART</button>
        <button class="view" style="border:1px solid #7d0a2e;background:white;color:#7d0a2e;padding:8px 14px;border-radius:20px;cursor:pointer">VIEW</button>
      </div>
    `).join('');

    // Lightbox + Add to Cart + View - POE 2.1
    grid.querySelectorAll('img').forEach(img=>{
      img.addEventListener('click', ()=>{
        const lb=document.createElement('div');
        lb.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,0.8);display:flex;justify-content:center;align-items:center;z-index:9999';
        lb.innerHTML=`<img src="${img.src}" style="max-width:90%;max-height:90%;border-radius:10px"><div style="position:absolute;top:20px;right:30px;color:white;font-size:40px;cursor:pointer">&times;</div>`;
        lb.onclick=()=>lb.remove(); document.body.appendChild(lb);
      });
    });
  }
  render(BOUQUETS);

  // Delegated buttons - works for all ADD TO CART / VIEW
  document.addEventListener('click', (e)=>{
    const t = e.target.innerText.trim().toUpperCase();
    const card = e.target.closest('.card');
    
    if(t==='ADD TO CART' || e.target.classList.contains('add')){
      const name = card?.dataset.name || 'Bouquet';
      const price = parseInt(card?.dataset.price || '300');
      cart.push({name, price}); save();
      e.target.innerText='ADDED ✓'; e.target.animate([{transform:'scale(1)'},{transform:'scale(1.1)'},{transform:'scale(1)'}],{duration:300});
      setTimeout(()=>e.target.innerText='ADD TO CART',1000);
      const cnt=document.querySelector('.cart-count, #cart-count'); if(cnt) cnt.innerText=cart.length;
    }
    if(t==='VIEW' || e.target.classList.contains('view')){
      alert(`${card?.dataset.name || 'Bouquet'}\nR${card?.dataset.price || ''}\nHandcrafted daily in Durban. Same-day delivery across KZN.`);
    }
  });

  // ====== 3. SEARCH - "Search flowers..." ======
  const search = document.querySelector('input[placeholder*="Search flowers"], input[type="search"], #search');
  if(search){
    search.addEventListener('input', e=>{
      const q=e.target.value.toLowerCase();
      render(BOUQUETS.filter(b=>b.name.toLowerCase().includes(q) || b.type.toLowerCase().includes(q)));
    });
  }

  // ====== 4. FILTER - All, Sunflower, Tulip, Lily, Orchid, Rose ======
  const filters = ['All','Sunflower','Tulip','Lily','Orchid','Rose','Daffodil','Lilies','Orchids','Peonie','Tulip'];
  filters.forEach(name=>{
    const btn = findBtn(name);
    if(btn && btn.innerText.length < 15){
      btn.style.cursor='pointer';
      btn.addEventListener('click', function(){
        document.querySelectorAll('button').forEach(b=>{ if(filters.includes(b.innerText.trim())){ b.style.background=''; b.style.color=''; } });
        this.style.background='#7d0a2e'; this.style.color='white';
        if(name==='All') render(BOUQUETS);
        else render(BOUQUETS.filter(b=>b.type.toLowerCase().includes(name.toLowerCase()) || b.name.toLowerCase().includes(name.toLowerCase())));
      });
    }
  });

  // ====== 5. SORT - Sort: Featured ======
  const sort = document.querySelector('select');
  if(sort){
    sort.addEventListener('change', e=>{
      let s=[...BOUQUETS];
      if(e.target.value.toLowerCase().includes('low')) s.sort((a,b)=>a.price-b.price);
      if(e.target.value.toLowerCase().includes('high')) s.sort((a,b)=>b.price-a.price);
      if(e.target.value.toLowerCase().includes('name')) s.sort((a,b)=>a.name.localeCompare(b.name));
      render(s);
    });
  }

  // ====== 6. CART PAGE - CHECKOUT / CLEAR CART / CONTINUE SHOPPING ======
  // Fixes Items: 0, Subtotal: R0, Total: R50
  const subtotal = cart.reduce((sum,i)=>sum+i.price,0);
  const total = cart.length ? subtotal + DELIVERY : DELIVERY;
  document.querySelectorAll('div').forEach(d=>{
    if(d.innerText.includes('Order Summary')){
      d.innerHTML = d.innerHTML.replace(/Items:\s*0/,'Items: '+cart.length).replace(/Subtotal:\s*R0/,'Subtotal: R'+subtotal).replace(/Total:\s*R50/,'Total: R'+total);
    }
  });

  const checkout = findBtn('CHECKOUT'); if(checkout){ checkout.style.cursor='pointer'; checkout.onclick=()=>{ if(!cart.length) return alert('Cart empty!'); if(confirm(`Pay R${total}? Checkout via WhatsApp`)){ let m=`Hi Alluring Florals! Order:%0A`; cart.forEach(i=>m+=`- ${i.name} R${i.price}%0A`); m+=`Total: R${total}`; window.open('https://wa.me/?text='+m,'_blank'); }}; }
  const clearBtn = findBtn('CLEAR CART'); if(clearBtn){ clearBtn.style.cursor='pointer'; clearBtn.onclick=()=>{ if(confirm('Clear cart?')){ cart=[]; save(); location.reload(); }}; }
  const contBtn = findBtn('CONTINUE SHOPPING'); if(contBtn){ contBtn.style.cursor='pointer'; contBtn.onclick=(e)=>{ e.preventDefault(); location.href='index.html'; }; }

  // ====== 7. FAQ + TABS + SOCIALS ======
  // FAQs accordion
  ['Do you do same-day delivery?','Can I customize a bouquet?','How long will my flowers last?'].forEach(q=>{
    const el=Array.from(document.querySelectorAll('*')).find(x=>x.innerText?.trim()===q);
    if(el){ el.style.cursor='pointer'; el.onclick=function(){ let n=this.nextElementSibling; if(n?.classList.contains('faqA')){ n.remove(); return; } let d=document.createElement('div'); d.className='faqA'; d.style.cssText='background:#fff0f0;padding:10px;margin-top:5px;border-radius:6px'; d.innerText = q.includes('same-day') ? 'Yes! Same-day across KZN before 2pm.' : q.includes('customize') ? 'Yes! WhatsApp us.' : '5-7 days with care.'; this.parentElement.appendChild(d); }; }
  });
  
  // Our Story tabs
  const storyPara = document.evaluate("//p[contains(text(),'Founded in Durban')]",document,null,9,null).singleNodeValue;
  const tabs = {'Our Story':'Founded in Durban, Alluring Florals delivers handcrafted bouquets daily across KZN. 500+ happy customers.','Mission':'To spread joy across KZN with fresh affordable flowers.','Flower Care':'Trim at 45°, change water daily, keep cool to last 7+ days.'};
  Object.keys(tabs).forEach(k=>{ const b=findBtn(k); if(b){ b.style.cursor='pointer'; b.onclick=()=>{ if(storyPara) storyPara.innerText=tabs[k]; }; } });

  // Social share
  const fb=findBtn('Share on Facebook'); if(fb) fb.onclick=()=>window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href),'_blank');
  const wa=findBtn('Share on WhatsApp'); if(wa) wa.onclick=()=>window.open('https://wa.me/?text='+encodeURIComponent('Alluring Florals KZN '+location.href),'_blank');
  const ig=findBtn('Follow on Instagram'); if(ig) ig.onclick=()=>window.open('https://instagram.com','_blank');

  // ====== 8. FORM VALIDATION - enquiry.html + contact.html - POE 4. ======
  const form = document.querySelector('form'); 
  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      const name=form.querySelector('[name="name"]')?.value || '';
      const email=form.querySelector('[name="email"]')?.value || '';
      const phone=form.querySelector('[name="phone"]')?.value || '';
      const msg=form.querySelector('[name="message"]')?.value || '';
      let err=[];
      if(name.length<3) err.push('Name 3+ chars');
      if(!/^\S+@\S+\.\S+$/.test(email)) err.push('Valid email');
      if(msg.length<10) err.push('Message 10+ chars');
      if(err.length) return alert('Fix:\n'+err.join('\n'));
      // AJAX submission
      fetch(form.action || '#', {method:'POST', body:new FormData(form)}).then(()=>alert('Sent! We will reply about cost/availability.')).catch(()=>alert('Enquiry saved locally (demo)'));
    });
  }

  // SEO: Set title if missing
  if(document.title==='') document.title='Alluring Florals - Durban KZN Handcrafted Bouquets';
});

// WEDE5020 POE - FORCES ALERT ON SEND MESSAGE
document.addEventListener('DOMContentLoaded', () => {
  
  const messageBox = document.querySelector('textarea');
  const sendBtn = Array.from(document.querySelectorAll('button')).find(b=>b.innerText.toUpperCase().includes('SEND MESSAGE'));
  const form = document.querySelector('form');

  if(!sendBtn || !form){
    console.log('Button/form not found');
    return;
  }

  // CRITICAL FIX: Stop form from reloading page
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // THIS is why your alert wasn't appearing
    handleSend();
    return false;
  });

  sendBtn.type = 'button'; // Prevent default submit
  sendBtn.style.cursor='pointer';
  
  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleSend();
  });

  function handleSend(){
    const name = document.querySelector('input[name="name"], input[placeholder*="Name" i], input[type="text"]')?.value.trim() || 'Customer';
    const email = document.querySelector('input[name="email"], input[type="email"]')?.value.trim() || '';
    const phone = document.querySelector('input[name="phone"], input[type="tel"]')?.value.trim() || '';
    const message = messageBox?.value.trim() || '';
    const type = document.querySelector('select')?.value || 'General Enquiry';

    // POE 4.1 Validation - min 10 chars
    if(!message){
      alert('❌ Please enter your message first!\n\nTell us what flowers you need... min 10 chars');
      messageBox.focus();
      messageBox.style.border='2px solid red';
      return;
    }
    if(message.length < 10){
      alert(`❌ Message too short!\n\nYou have ${message.length}/10 chars minimum.\n\nCurrent: "${message}"\n\nPlease write more about what flowers you need.`);
      messageBox.focus();
      messageBox.style.border='2px solid red';
      return;
    }
    if(!email || !email.includes('@')){
      alert('❌ Please enter a valid email address (must contain @)');
      return;
    }

    messageBox.style.border='1px solid #2d6a4f';

    // ====== THIS ALERT WILL NOW APPEAR - FORCES IT ======
    alert(`✅ Message Sent Successfully!\n\nThank you ${name}!\n\nEmail: ${email}\nPhone: ${phone}\nType: ${type}\nMessage: "${message}"\n\nWe will reply about cost/availability and same-day delivery in Durban/KZN within 1 hour.\n\nCompiled email to: info@alluringflorals.co.za`);

    // AJAX (POE 4.2 requirement) - after alert
    const formData = new FormData(form);
    formData.set('name', name);
    formData.set('email', email);
    formData.set('phone', phone);
    formData.set('message', message);

    // Show sending
    const originalText = sendBtn.innerText;
    sendBtn.innerText='Sending...';
    sendBtn.disabled=true;

    fetch(form.action || '#', { method:'POST', body: formData })
      .then(() => {
        sendBtn.innerText='Sent ✓';
        sendBtn.style.background='#2d6a4f';
        // Second alert for confirmation
        setTimeout(()=>alert('✅ Enquiry saved! Our team will WhatsApp/email you shortly about your flowers.'), 500);
        form.reset();
        setTimeout(()=>{ sendBtn.innerText=originalText; sendBtn.disabled=false; sendBtn.style.background=''; }, 2000);
      })
      .catch(() => {
        // Even if fetch fails, alert still shows (demo mode)
        sendBtn.innerText='Sent ✓ (Demo)';
        alert('✅ Enquiry saved locally (demo mode)\n\nIn production this would email info@alluringflorals.co.za\n\nYour message: '+message);
        form.reset();
        setTimeout(()=>{ sendBtn.innerText=originalText; sendBtn.disabled=false; }, 2000);
      });
  }
});
// WEDE5020 - contact.js FINAL - Contact page only (Send Email)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const conName = document.getElementById('conName');
  const conEmail = document.getElementById('conEmail');
  const conPhone = document.getElementById('conPhone');
  const conType = document.getElementById('conType');
  const conMessage = document.getElementById('conMessage');

  const conNameError = document.getElementById('conNameError');
  const conEmailError = document.getElementById('conEmailError');
  const conPhoneError = document.getElementById('conPhoneError');
  const conTypeError = document.getElementById('conTypeError');
  const conMessageError = document.getElementById('conMessageError');
  const conStatus = document.getElementById('conStatus');
  const emailPreview = document.getElementById('emailPreview');
  const emailContent = document.getElementById('emailContent');
  const mailtoLink = document.getElementById('mailtoLink');

  function setError(input, errorEl, msg){
    if(errorEl){ errorEl.innerText = msg; errorEl.style.color='red'; }
    if(input){ input.style.border='2px solid red'; }
  }
  function clearError(input, errorEl){
    if(errorEl){ errorEl.innerText = ''; }
    if(input){ input.style.border='1px solid #ccc'; }
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();

    // Get values
    const nameVal = conName.value.trim();
    const emailVal = conEmail.value.trim();
    const phoneVal = conPhone.value.trim();
    const typeVal = conType.value;
    const msgVal = conMessage.value.trim();

    // Reset errors
    clearError(conName, conNameError);
    clearError(conEmail, conEmailError);
    clearError(conPhone, conPhoneError);
    clearError(conType, conTypeError);
    clearError(conMessage, conMessageError);

    let valid = true;

    // Validation - POE 4.1
    if(nameVal.length < 3){
      setError(conName, conNameError, 'Name must be 3+ chars');
      valid = false;
    }
    if(!emailVal.includes('@') || !emailVal.includes('.')){
      setError(conEmail, conEmailError, 'Please enter a valid email address (must contain @)');
      valid = false;
    }
    if(phoneVal && phoneVal.replace(/\D/g,'').length !== 10){
      setError(conPhone, conPhoneError, 'Phone must be 10 digits');
      valid = false;
    }
    if(!typeVal){
      setError(conType, conTypeError, 'Please select Type of Message');
      valid = false;
    }
    if(!msgVal){
      setError(conMessage, conMessageError, 'Please enter your message first!');
      valid = false;
    } else if(msgVal.length < 20){
      setError(conMessage, conMessageError, `Message too short! You have ${msgVal.length}/20 chars minimum. Current: "${msgVal}" Please write more.`);
      valid = false;
    }

    if(!valid){
      if(conStatus){
        conStatus.innerText = 'Fix errors above';
        conStatus.style.display='block';
        conStatus.style.background='#ffe0e0';
        conStatus.style.color='red';
        conStatus.style.padding='10px';
      }
      return;
    }

    // SUCCESS - POE 4.2 Alert + Preview + Mailto + AJAX
    const compiled = `To: info@alluringflorals.co.za\nFrom: ${emailVal}\nName: ${nameVal}\nPhone: ${phoneVal || 'Not provided'}\nType: ${typeVal}\n\nMessage:\n${msgVal}\n\nWe will reply about cost/availability`;

    if(emailContent) emailContent.innerText = compiled;
    if(emailPreview){
      emailPreview.classList.remove('hidden');
      emailPreview.style.display='block';
    }
    if(conStatus){
      conStatus.innerText='Email compiled! Ready to send.';
      conStatus.style.display='block';
      conStatus.style.background='#e0ffe0';
      conStatus.style.color='green';
      conStatus.style.padding='10px';
    }

    // Mailto link
    const subject = encodeURIComponent(`Alluring Florals - ${typeVal} - ${nameVal}`);
    const body = encodeURIComponent(compiled);
    if(mailtoLink) mailtoLink.href = `mailto:info@alluringflorals.co.za?subject=${subject}&body=${body}`;

    // THIS ALERT WILL NOW APPEAR - FORCES IT
    alert(`✅ Message Sent Successfully!\n\nName: ${nameVal}\nEmail: ${emailVal}\nPhone: ${phoneVal}\nType: ${typeVal}\nMessage: "${msgVal}"\n\nWe will reply about cost/availability shortly.`);

    // AJAX (POE Requirement)
    const formData = new FormData(form);
    fetch(form.action || '#', { method: 'POST', body: formData })
      .then(() => {
        alert('✅ Enquiry saved! Our team will WhatsApp/email you shortly about your flowers.');
      })
      .catch(() => {
        // Demo - still show success
      });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('homeLocationBtn');
  const status = document.getElementById('homeLocationStatus');
  const mapDiv = document.getElementById('homeMap');
  const hiddenInput = document.getElementById('homeUserLocation');
  if(!btn) return;

  btn.addEventListener('click', () => {
    if(!navigator.geolocation){
      status.innerHTML = 'Geolocation not supported';
      return;
    }
    btn.innerText = 'Getting location...';
    btn.disabled = true;
    status.innerText = 'Please allow location permission...';

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const acc = Math.round(pos.coords.accuracy);
        const link = `https://www.google.com/maps?q=${lat},${lng}`;
        const fullLoc = `Lat: ${lat}, Lng: ${lng} (${acc}m) | ${link}`;

        if(hiddenInput) hiddenInput.value = fullLoc;
        localStorage.setItem('userLiveLocation', fullLoc);

        status.innerHTML = `Location Found!<br>Lat: ${lat}<br>Lng: ${lng}<br><a href="${link}" target="_blank">View on Google Maps</a>`;
        btn.innerText = 'Location Captured';
        btn.disabled = false;
        mapDiv.style.display = 'block';
        mapDiv.innerHTML = `<iframe width="100%" height="300" frameborder="0" src="https://maps.google.com/maps?q=${lat},${lng}&z=16&output=embed" allowfullscreen></iframe>`;
        alert(`LIVE LOCATION\nLat: ${lat}\nLng: ${lng}\n${link}`);
      },
      (err) => {
        btn.innerText = 'Get My Live Location for Delivery';
        btn.disabled = false;
        status.innerHTML = `Error: ${err.message}`;
      },
      { enableHighAccuracy: true, timeout: 15000 }
    );
  });
});
// CONTINUE SHOPPING -> GO TO LIST OF IMAGES IN SHOP TAB
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('continueBtn');
  if (!btn) return;

  // Clone to remove any old blocking code
  const newBtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(newBtn, btn);

  newBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    // Go to shop page where list of images is
    window.location.href = 'shop.html';
  });
});