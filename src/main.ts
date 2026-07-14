// @ts-nocheck
(() => {
  'use strict';

  const APP = {
    id: 'decklist-assistant-v6',
    name: 'DeckList Assistant',
    version: '6.2.0',
    storageKey: 'dla-v6-state',
    settingsKey: 'dla-v6-settings',
    defaultRepo: 'luiztraghia/decklist-assistant',
    pixKey: 'luiz.traghia@gmail.com',
    pixPayload: '00020126440014BR.GOV.BCB.PIX0122luiz.traghia@gmail.com5204000053039865802BR5921Luiz Fernando Traghia6003SCS62070503***630447FF',
    qrDataUrl: 'data:image/png;base64,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'
  };

  if (document.getElementById(APP.id)) return;

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const nowIso = () => new Date().toISOString();
  const safe = value => String(value ?? '').replace(/[&<>\"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[c]));

  const DEFAULT_SETTINGS = {
    theme: 'site',
    githubRepo: APP.defaultRepo,
    typingDelay: 110,
    suggestionTimeout: 8000,
    betweenCardsDelay: 700,
    retries: 2,
    mergeDuplicates: true,
    ignoreAlternateArt: true,
    ignoreParallel: true,
    ignoreSP: true,
    ignoreManga: true,
    confirmAmbiguous: true,
    checkUpdatesOnStart: true
  };

  let settings = {...DEFAULT_SETTINGS,...loadJson(APP.settingsKey, {})};
  let targetField = null;
  let runner = { running:false, paused:false, cancelled:false, cards:[], results:[], index:0, startedAt:null };
  let parsedCurrent = { cards:[], invalid:[], duplicates:[], totalUnits:0 };

  function loadJson(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? {...fallback, ...JSON.parse(value)} : {...fallback};
    } catch { return {...fallback}; }
  }
  function saveJson(key, value) { localStorage.setItem(key, JSON.stringify(value)); }

  function parseList(text) {
    const rawLines = String(text || '').replace(/\r/g,'\n').replace(/[;,|]+/g,'\n').split(/\n+/).map(v=>v.trim()).filter(Boolean);
    const map = new Map();
    const invalid = [];
    const duplicates = [];

    for (const original of rawLines) {
      const line = original.toUpperCase().replace(/\s+/g,' ').trim();
      let m = line.match(/^(\d+)\s*[X×]?\s*([A-Z0-9]+-\d{3})$/);
      let qty, code;
      if (m) { qty=Number(m[1]); code=m[2]; }
      else {
        m = line.match(/^([A-Z0-9]+-\d{3})\s*[X×]?\s*(\d+)$/);
        if (m) { code=m[1]; qty=Number(m[2]); }
      }
      if (!m || !Number.isInteger(qty) || qty < 1 || qty > 999) { invalid.push(original); continue; }
      if (map.has(code)) duplicates.push({code, previous:map.get(code), added:qty});
      map.set(code, settings.mergeDuplicates ? (map.get(code)||0)+qty : qty);
    }
    const cards=[...map.entries()].map(([code,qty])=>({code,qty}));
    return {cards, invalid, duplicates, totalUnits:cards.reduce((s,c)=>s+c.qty,0)};
  }

  function isEditable(el) {
    if (!el) return false;
    const type=(el.type||'').toLowerCase();
    return el.tagName==='TEXTAREA' || (el.tagName==='INPUT' && !['button','submit','checkbox','radio','file','hidden'].includes(type)) || el.isContentEditable || el.getAttribute?.('role')==='textbox';
  }

  function detectTarget() {
    const candidates=[...document.querySelectorAll('textarea,input,[contenteditable="true"],[role="textbox"]')]
      .filter(isEditable)
      .filter(el=>!panel.contains(el));
    return candidates.find(el=>el.id==='card_list' || el.name==='card_list') ||
      candidates.find(el=>/card|lista/i.test(`${el.id} ${el.name} ${el.placeholder}`)) || null;
  }

  function dispatchKey(el,type,key) {
    const keyCode = key.length===1 ? key.toUpperCase().charCodeAt(0) : key==='Enter'?13:key===' '?32:0;
    el.dispatchEvent(new KeyboardEvent(type,{key,code:key===' '?'Space':key==='Enter'?'Enter':'',keyCode,which:keyCode,charCode:type==='keypress'?keyCode:0,bubbles:true,cancelable:true,composed:true}));
  }

  function triggerSiteListeners(el) {
    el.dispatchEvent(new Event('input',{bubbles:true}));
    el.dispatchEvent(new Event('change',{bubbles:true}));
    dispatchKey(el,'keyup','a');
    try {
      if (window.jQuery) window.jQuery(el).trigger('input').trigger('keyup').trigger('change');
    } catch {}
  }

  async function waitIfPaused() {
    while (runner.paused && !runner.cancelled) await sleep(150);
    if (runner.cancelled) throw new Error('cancelled');
  }

  function insertChar(el,char) {
    el.focus();
    dispatchKey(el,'keydown',char);
    dispatchKey(el,'keypress',char);
    el.dispatchEvent(new InputEvent('beforeinput',{bubbles:true,cancelable:true,inputType:char==='\n'?'insertLineBreak':'insertText',data:char==='\n'?null:char}));

    if (el.isContentEditable) {
      document.execCommand(char==='\n'?'insertLineBreak':'insertText',false,char==='\n'?undefined:char);
    } else {
      const start=typeof el.selectionStart==='number'?el.selectionStart:el.value.length;
      const end=typeof el.selectionEnd==='number'?el.selectionEnd:start;
      if (typeof el.setRangeText==='function') el.setRangeText(char,start,end,'end');
      else el.value=el.value.slice(0,start)+char+el.value.slice(end);
    }

    el.dispatchEvent(new InputEvent('input',{bubbles:true,inputType:char==='\n'?'insertLineBreak':'insertText',data:char==='\n'?null:char}));
    dispatchKey(el,'keyup',char);
  }

  async function typeText(el,text) {
    el.focus();
    if (!el.isContentEditable && typeof el.selectionStart==='number') el.selectionStart=el.selectionEnd=el.value.length;
    for (const char of text) { await waitIfPaused(); insertChar(el,char); await sleep(settings.typingDelay); }
    triggerSiteListeners(el);
  }

  function visible(el) {
    if (!el) return false;
    const r=el.getBoundingClientRect(), s=getComputedStyle(el);
    return r.width>2 && r.height>2 && s.display!=='none' && s.visibility!=='hidden' && s.opacity!=='0';
  }

  function suggestionCandidates(code) {
    const upper=code.toUpperCase();
    const tr=targetField?.getBoundingClientRect();
    return [...document.querySelectorAll('[role="option"],li,a,div,span')]
      .filter(visible)
      .filter(el=>el!==targetField && !el.contains(targetField))
      .map(el=>({el,text:(el.textContent||'').trim()}))
      .filter(x=>x.text.toUpperCase().includes(upper))
      .filter(x=>{
        const r=x.el.getBoundingClientRect();
        if (r.width>1000 || r.height>120 || x.text.length>240) return false;
        if (!tr) return true;
        return r.left>=tr.left-30 && r.left<=tr.right+1000 && r.top>=tr.top-50 && r.top<=tr.bottom+650;
      });
  }

  function classifySuggestion(text,code) {
    const t=text.toUpperCase();
    const escaped=code.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    const exact=new RegExp(`\\(${escaped}\\)\\s*$`,'i').test(text);
    const alternate=/ALTERNATE(?: ART)?|ARTE ALTERNATIVA|-AA\)/i.test(text);
    const parallel=/PARALLEL|-PA\)|-P\)|-PRB\)/i.test(text);
    const sp=/\bSP\b|-SP\)/i.test(text);
    const manga=/\bMANGA\b/i.test(text);
    const variant=alternate||parallel||sp||manga;
    const ignored=(settings.ignoreAlternateArt&&alternate)||(settings.ignoreParallel&&parallel)||(settings.ignoreSP&&sp)||(settings.ignoreManga&&manga);
    let score=0;
    if (exact) score-=1000;
    score+=text.length;
    return {exact,variant,ignored,score};
  }

  function chooseSuggestion(code) {
    const list=suggestionCandidates(code).map(x=>({...x,...classifySuggestion(x.text,code)})).filter(x=>!x.ignored).sort((a,b)=>a.score-b.score);
    if (!list.length) return {chosen:null,list:[]};
    const ambiguous=list.length>1 && list[0].score===list[1].score;
    return {chosen:list[0],list,ambiguous};
  }

  async function waitForSuggestion(code) {
    const start=Date.now();
    while (Date.now()-start<settings.suggestionTimeout) {
      await waitIfPaused();
      const result=chooseSuggestion(code);
      if (result.chosen) return result;
      await sleep(150);
    }
    return {chosen:null,list:[]};
  }

  function clickElement(el) {
    el.scrollIntoView({block:'nearest'});
    for (const type of ['mouseover','pointerdown','mousedown','pointerup','mouseup','click']) {
      try {
        const C=type.startsWith('pointer')?PointerEvent:MouseEvent;
        el.dispatchEvent(new C(type,{bubbles:true,cancelable:true,view:window,button:0}));
      } catch {}
    }
    try { el.click(); } catch {}
  }

  async function addOne(card) {
    if (!targetField || !document.contains(targetField)) targetField=detectTarget();
    if (!targetField) throw new Error('Campo da lista não encontrado.');

    const existing=targetField.isContentEditable?(targetField.textContent||''):(targetField.value||'');
    if (existing && !existing.endsWith('\n')) await typeText(targetField,'\n');

    await typeText(targetField,`${card.qty} @${card.code}`);
    await sleep(Math.max(250,settings.typingDelay*3));

    let found=await waitForSuggestion(card.code);
    for (let attempt=0; !found.chosen && attempt<settings.retries; attempt++) {
      triggerSiteListeners(targetField);
      await sleep(600+(attempt*500));
      found=await waitForSuggestion(card.code);
    }

    if (!found.chosen) return {ok:false,status:'not_found',message:'Nenhuma sugestão encontrada após as tentativas.'};

    if (found.ambiguous && settings.confirmAmbiguous) {
      runner.paused=true;
      renderAmbiguity(card,found.list);
      const chosen=await waitForManualChoice();
      runner.paused=false;
      if (!chosen) throw new Error('cancelled');
      found.chosen=chosen;
    }

    clickElement(found.chosen.el);
    await sleep(settings.betweenCardsDelay);
    return {ok:true,status:'ok',chosenText:found.chosen.text,variant:found.chosen.variant};
  }

  let manualResolver=null;
  function waitForManualChoice() { return new Promise(resolve=>manualResolver=resolve); }
  function renderAmbiguity(card,list) {
    els.ambiguity.innerHTML=`<div class="modal-card"><h3>Escolha necessária</h3><p>Há mais de uma opção equivalente para <b>${safe(card.code)}</b>.</p><div class="choice-list">${list.slice(0,8).map((x,i)=>`<button data-choice="${i}">${safe(x.text)}</button>`).join('')}</div><button data-choice="cancel" class="danger">Cancelar execução</button></div>`;
    els.ambiguity.classList.add('show');
    els.ambiguity.querySelectorAll('[data-choice]').forEach(btn=>btn.onclick=()=>{
      const value=btn.dataset.choice;
      els.ambiguity.classList.remove('show');
      const resolver=manualResolver; manualResolver=null;
      resolver?.(value==='cancel'?null:list[Number(value)]);
    });
  }

  function estimateSeconds(count) {
    const per=((settings.typingDelay*14)+settings.betweenCardsDelay+900)/1000;
    return Math.max(1,Math.round(count*per));
  }
  function humanTime(sec) { const m=Math.floor(sec/60),s=sec%60; return m?`${m}min ${s}s`:`${s}s`; }

  async function runCards(cards,startIndex=0) {
    runner={running:true,paused:false,cancelled:false,cards,results:[],index:startIndex,startedAt:nowIso()};
    setControls(true);
    updateProgress(startIndex,cards.length);
    const started=Date.now();

    try {
      for (let i=startIndex;i<cards.length;i++) {
        await waitIfPaused();
        runner.index=i;
        const card=cards[i];
        setStatus(`Processando <b>${i+1}/${cards.length}</b>: <b>${card.qty}x${card.code}</b>`,'working');
        let result;
        try { result=await addOne(card); } catch (e) { if (e.message==='cancelled') throw e; result={ok:false,status:'error',message:e.message}; }
        runner.results.push({...card,...result,time:nowIso()});
        updateProgress(i+1,cards.length);
        renderLog();
      }

      const failures=runner.results.filter(r=>!r.ok).length;
      const elapsed=Math.round((Date.now()-started)/1000);
      setStatus(failures?`Concluído com <b>${failures} falha(s)</b>. Use “Tentar falhas novamente”.`:`Concluído com sucesso em <b>${humanTime(elapsed)}</b>.`,failures?'error':'success');
    } catch (e) {
      setStatus(e.message==='cancelled'?'Execução interrompida.':'Erro: '+safe(e.message),'error');
    } finally { runner.running=false;runner.paused=false;setControls(false); }
  }

  function retryFailures() {
    const failed=runner.results.filter(r=>!r.ok).map(r=>({qty:r.qty,code:r.code}));
    if (!failed.length) return setStatus('Não há falhas para repetir.','info');
    runCards(failed,0);
  }

  function updateStats() {
    parsedCurrent=parseList(els.input.value);
    els.statUnique.textContent=parsedCurrent.cards.length;
    els.statUnits.textContent=parsedCurrent.totalUnits;
    els.statDup.textContent=parsedCurrent.duplicates.length;
    els.statInvalid.textContent=parsedCurrent.invalid.length;
    els.statTime.textContent=humanTime(estimateSeconds(parsedCurrent.cards.length));
    els.invalidBox.innerHTML=parsedCurrent.invalid.length?`<b>Linhas inválidas:</b><br>${parsedCurrent.invalid.map(safe).join('<br>')}`:'Lista válida.';
    els.invalidBox.className='validation '+(parsedCurrent.invalid.length?'bad':'good');
  }

  function updateProgress(done,total) {
    const pct=total?Math.round(done/total*100):0;
    els.progress.style.width=pct+'%'; els.progressText.textContent=pct+'%';
    const remaining=Math.max(0,total-done);
    els.current.textContent=total?`${done} de ${total}`:'0 de 0';
    els.remaining.textContent=humanTime(estimateSeconds(remaining));
  }

  function renderLog() {
    els.log.innerHTML=runner.results.map(r=>`<div class="log-row ${r.ok?'ok':'fail'}"><span>${r.ok?'✓':'✕'}</span><div><b>${r.qty}x${safe(r.code)}</b><small>${safe(r.chosenText||r.message||'')}</small></div></div>`).join('') || '<div class="empty">Nenhum item processado.</div>';
    els.retryFailures.disabled=!runner.results.some(r=>!r.ok);
  }

  function exportTxt() {
    const blob=new Blob([parsedCurrent.cards.map(c=>`${c.qty}x${c.code}`).join('\n')],{type:'text/plain;charset=utf-8'});
    downloadBlob(blob,'lista-one-piece.txt');
  }
  function exportCsv() {
    const rows=['quantidade,codigo',...parsedCurrent.cards.map(c=>`${c.qty},${c.code}`)];
    downloadBlob(new Blob([rows.join('\n')],{type:'text/csv;charset=utf-8'}),'lista-one-piece.csv');
  }
  function downloadBlob(blob,name) {
    const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }

  function semverParts(v) { return String(v).replace(/^v/,'').split('.').map(n=>parseInt(n,10)||0); }
  function newer(a,b) { const A=semverParts(a),B=semverParts(b);for(let i=0;i<3;i++){if((A[i]||0)!==(B[i]||0))return (A[i]||0)>(B[i]||0);}return false; }

  function checkUpdates(manual=false) {
    const repo=APP.defaultRepo;
    els.updateCurrent.textContent=APP.version;
    els.updateStatus.textContent='Buscando atualização no GitHub…';
    GM_xmlhttpRequest({
      method:'GET',
      url:`https://api.github.com/repos/${repo}/releases/latest`,
      headers:{'Accept':'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'},
      onload:r=>{
        try {
          if (r.status<200||r.status>=300) throw new Error(`GitHub respondeu ${r.status}`);
          const release=JSON.parse(r.responseText);
          const latest=release.tag_name||release.name;
          els.updateLatest.textContent=latest||'desconhecida';
          if (latest && newer(latest,APP.version)) {
            els.updateStatus.innerHTML=`Nova versão disponível: <b>${safe(latest)}</b>.`;
            els.updateOpen.hidden=false;
            els.updateOpen.onclick=()=>window.open(release.html_url, '_blank','noopener');
            const asset=(release.assets||[]).find(a=>/\.user\.js$/i.test(a.name));
            els.updateInstall.hidden=!asset;
            if (asset) els.updateInstall.onclick=()=>window.open(asset.browser_download_url,'_blank','noopener');
          } else { els.updateStatus.textContent='Você está usando a versão mais recente.';els.updateOpen.hidden=true;els.updateInstall.hidden=true; }
        } catch(e) { els.updateStatus.textContent='Não foi possível verificar: '+e.message; }
      },
      onerror:()=>els.updateStatus.textContent='Falha de conexão com o GitHub.'
    });
  }

  function applyTheme() {
    panel.dataset.theme=settings.theme;
    document.documentElement.style.setProperty('--acl-accent',settings.theme==='pirate'?'#d7a20b':'#2893e8');
  }

  function saveSettingsFromUi() {
    settings={...settings,
      typingDelay:Number(els.typingDelay.value),
      ignoreAlternateArt:els.ignoreAlternateArt.checked,
      ignoreParallel:els.ignoreParallel.checked,
      ignoreSP:els.ignoreSP.checked,
      ignoreManga:els.ignoreManga.checked,
    };
    saveJson(APP.settingsKey,settings);updateStats();setStatus('Velocidade salva.','success');
  }

  function loadSettingsUi() {
    els.typingDelay.value=String(settings.typingDelay);
    els.ignoreAlternateArt.checked=settings.ignoreAlternateArt;
    els.ignoreParallel.checked=settings.ignoreParallel;
    els.ignoreSP.checked=settings.ignoreSP;
    els.ignoreManga.checked=settings.ignoreManga;
    updateSpeedWarning();
  }

  function updateSpeedWarning() {
    const value=Number(els.typingDelay.value);
    els.speedWarning.hidden=value!==60;
    els.speedWarning.textContent='O modo rápido pode falhar se o site ou sua conexão estiverem lentos. Se isso acontecer, use Médio ou Lento.';
  }

  function setControls(active) {
    els.start.disabled=active;els.pause.disabled=!active;els.stop.disabled=!active;els.pause.textContent='Pausar';
  }
  function setStatus(text,type='info') { els.status.className='status '+type;els.status.innerHTML=text; }
  function showTab(name) {
    panel.querySelectorAll('[data-tab]').forEach(b=>b.classList.toggle('active',b.dataset.tab===name));
    panel.querySelectorAll('.tab-panel').forEach(p=>p.classList.toggle('active',p.id==='tab-'+name));
  }

  const panel=document.createElement('section');
  panel.id=APP.id;
  panel.dataset.theme='site';
  panel.innerHTML=`
  <header><div><strong>${APP.name}</strong><small>v${APP.version} · projeto independente e open source</small></div><div class="header-actions"><button id="acl-donate">Doar</button><button id="acl-collapse">−</button></div></header>
  <nav>${[['list','Lista'],['run','Execução'],['report','Relatório'],['settings','Configurações'],['contact','Contato'],['update','Atualizações']].map(([id,label])=>`<button data-tab="${id}">${label}</button>`).join('')}</nav>
  <main>
    <section class="tab-panel active" id="tab-list">
      <div class="target" id="acl-target">Clique no campo “Adicione a lista de cards”.</div>
      <label>Lista de cartas</label><textarea id="acl-input" placeholder="4xEB03-053\n3xOP06-116\n2xST30-012"></textarea>
      <div class="toolbar"><label class="file-btn">Importar TXT<input type="file" id="acl-file" accept=".txt,text/plain" hidden></label><button id="acl-export-txt">Exportar TXT</button><button id="acl-export-csv">Exportar CSV</button><button id="acl-clear">Limpar</button></div>
      <div class="stats"><div><b id="s-unique">0</b><span>Códigos</span></div><div><b id="s-units">0</b><span>Unidades</span></div><div><b id="s-dup">0</b><span>Duplicados</span></div><div><b id="s-invalid">0</b><span>Inválidos</span></div><div><b id="s-time">0s</b><span>Estimativa</span></div></div>
      <div id="acl-validation" class="validation good">Lista válida.</div>
      <button id="acl-start" class="primary wide">Iniciar preenchimento</button>
    </section>
    <section class="tab-panel" id="tab-run">
      <div class="dashboard"><div class="ring"><span id="acl-progress-text">0%</span></div><div><h3>Execução</h3><p>Progresso: <b id="acl-current">0 de 0</b></p><p>Tempo restante: <b id="acl-remaining">0s</b></p></div></div>
      <div class="progress-track"><div id="acl-progress"></div></div><div id="acl-status" class="status info">Aguardando.</div>
      <div class="actions"><button id="acl-pause" disabled>Pausar</button><button id="acl-stop" disabled class="danger">Parar</button></div>
    </section>
    <section class="tab-panel" id="tab-report"><div class="report-actions"><button id="acl-copy-report">Copiar relatório</button><button id="acl-retry" disabled>Tentar falhas novamente</button></div><div id="acl-log" class="log"><div class="empty">Nenhum item processado.</div></div></section>
    <section class="tab-panel" id="tab-settings">
      <div class="form-grid"><label>Velocidade<select id="acl-speed"><option value="60">Rápido</option><option value="110">Médio</option><option value="180">Lento</option></select></label>
      <div id="acl-speed-warning" class="warning" hidden></div>
      </div>
      <div class="checks">
        <label><input type="checkbox" id="acl-ignore-aa">Ignorar Arte Alternativa</label>
        <label><input type="checkbox" id="acl-ignore-parallel">Ignorar Parallel</label>
        <label><input type="checkbox" id="acl-ignore-sp">Ignorar SP</label>
        <label><input type="checkbox" id="acl-ignore-manga">Ignorar Manga</label>
      </div>
      <button id="acl-save-settings" class="primary">Salvar configurações</button>
    </section>
    <section class="tab-panel" id="tab-contact">
      <div class="contact-card">
        <h3>Contato</h3>
        <p>Encontrou um bug, tem uma sugestão ou quer deixar um elogio? Envie uma mensagem para:</p>
        <div class="contact-email"><code id="acl-contact-email">luiz.traghia@gmail.com</code><button id="acl-copy-email">Copiar e-mail</button></div>
      </div>
    </section>
    <section class="tab-panel" id="tab-update"><div class="version-card"><span>Versão atual</span><b id="acl-current-version">${APP.version}</b><span>Versão no GitHub</span><b id="acl-latest-version">—</b></div><p id="acl-update-status">Ainda não verificado.</p><div class="actions"><button id="acl-check-update" class="primary">Buscar atualizações</button><button id="acl-open-release" hidden>Abrir lançamento</button><button id="acl-install-release" hidden>Instalar atualização</button></div></section>
  </main>
  <footer><span>Ferramenta independente, não afiliada à Liga One Piece.</span><button id="acl-footer-donate">Apoiar via PIX</button></footer>
  <div id="acl-ambiguity" class="modal"></div>
  <div id="acl-donation" class="modal"><div class="modal-card donation"><button class="close" id="acl-close-donation">×</button><h2>Apoie o projeto</h2><p>Este projeto é gratuito e open source. Se ele economizou seu tempo, considere me ajudar a terminar meu deck. 😊</p><img src="${APP.qrDataUrl}" alt="QR Code PIX"><label>Chave PIX</label><div class="copy-row"><code>${APP.pixKey}</code><button id="acl-copy-key">Copiar</button></div><label>PIX Copia e Cola</label><textarea readonly id="acl-pix-payload">${APP.pixPayload}</textarea><button id="acl-copy-payload" class="primary wide">Copiar PIX Copia e Cola</button></div></div>`;

  const style=document.createElement('style');
  style.textContent=`
  #${APP.id}{--acl-bg:#171a1d;--acl-panel:#202428;--acl-text:#f4f4f4;--acl-muted:#aab2b9;--acl-border:#42484e;--acl-accent:#2893e8;position:fixed;right:14px;bottom:14px;width:min(430px,calc(100vw - 28px));max-height:94vh;z-index:2147483647;background:var(--acl-bg);color:var(--acl-text);border:1px solid var(--acl-border);border-radius:15px;box-shadow:0 16px 45px #0008;font:14px/1.4 Arial,sans-serif;overflow:hidden}
  #${APP.id}[data-theme="light"]{--acl-bg:#fff;--acl-panel:#f3f5f7;--acl-text:#202124;--acl-muted:#5f6368;--acl-border:#ccd0d5}
  #${APP.id}[data-theme="pirate"]{--acl-bg:#17150e;--acl-panel:#242014;--acl-text:#fff8dc;--acl-muted:#c8b987;--acl-border:#66541b;--acl-accent:#d7a20b}
  #${APP.id} *{box-sizing:border-box} #${APP.id} header{display:flex;justify-content:space-between;align-items:center;padding:12px 14px;background:#111;color:#fff} #${APP.id} header strong,#${APP.id} header small{display:block} #${APP.id} header small{opacity:.7;font-size:11px} #${APP.id} button,#${APP.id} select,#${APP.id} input,#${APP.id} textarea{font:inherit} #${APP.id} button,#${APP.id} .file-btn{border:1px solid var(--acl-border);background:var(--acl-panel);color:var(--acl-text);border-radius:8px;padding:8px 10px;cursor:pointer;text-align:center} #${APP.id} button:hover,#${APP.id} .file-btn:hover{filter:brightness(1.12)} #${APP.id} button:disabled{opacity:.45;cursor:not-allowed} #${APP.id} .primary{background:var(--acl-accent);border-color:var(--acl-accent);color:#fff} #${APP.id} .danger{border-color:#c54848;color:#ff8c8c} #${APP.id} .ghost{background:transparent} #${APP.id} .wide{width:100%} #${APP.id} nav{display:flex;overflow-x:auto;background:var(--acl-panel);border-bottom:1px solid var(--acl-border)} #${APP.id} nav button{border:0;border-radius:0;background:transparent;white-space:nowrap;font-size:12px;padding:10px} #${APP.id} nav button.active{color:var(--acl-accent);box-shadow:inset 0 -2px var(--acl-accent)} #${APP.id} main{padding:13px;max-height:70vh;overflow:auto} #${APP.id} .tab-panel{display:none} #${APP.id} .tab-panel.active{display:block} #${APP.id} label{display:block;margin:8px 0 4px;font-weight:600} #${APP.id} textarea,#${APP.id} input,#${APP.id} select{width:100%;border:1px solid var(--acl-border);border-radius:8px;background:var(--acl-panel);color:var(--acl-text);padding:9px} #acl-input{height:155px;font-family:monospace} #${APP.id} .target,#${APP.id} .status,#${APP.id} .validation,#${APP.id} .warning{padding:9px;border-radius:8px;background:var(--acl-panel);margin-bottom:10px} #${APP.id} .target{color:#70e0a0} #${APP.id} .validation.good,#${APP.id} .status.success{color:#72e59f} #${APP.id} .validation.bad,#${APP.id} .status.error,#${APP.id} .warning{color:#ff8585} #${APP.id} .toolbar,#${APP.id} .actions,#${APP.id} .report-actions{display:flex;gap:7px;flex-wrap:wrap;margin:9px 0} #${APP.id} .stats{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin:10px 0} #${APP.id} .stats div{background:var(--acl-panel);padding:8px 4px;text-align:center;border-radius:8px} #${APP.id} .stats b,#${APP.id} .stats span{display:block} #${APP.id} .stats span{font-size:10px;color:var(--acl-muted)} #${APP.id} .dashboard{display:flex;gap:16px;align-items:center} #${APP.id} .ring{width:86px;height:86px;border-radius:50%;border:8px solid var(--acl-panel);display:grid;place-items:center;color:var(--acl-accent);font-weight:bold} #${APP.id} .progress-track{height:10px;background:var(--acl-panel);border-radius:999px;overflow:hidden;margin:12px 0} #acl-progress{height:100%;width:0;background:var(--acl-accent);transition:width .2s} #${APP.id} .log{display:grid;gap:6px} #${APP.id} .log-row{display:flex;gap:8px;padding:8px;background:var(--acl-panel);border-radius:8px} #${APP.id} .log-row.ok>span{color:#65df95} #${APP.id} .log-row.fail>span{color:#ff7777} #${APP.id} .log-row small{display:block;color:var(--acl-muted)} #${APP.id} .history-item{display:flex;justify-content:space-between;gap:8px;padding:9px 0;border-bottom:1px solid var(--acl-border)} #${APP.id} .history-item small{display:block;color:var(--acl-muted)} #${APP.id} .section-head,#${APP.id} .lop-log-head{display:flex;justify-content:space-between;align-items:center} #${APP.id} .form-grid{display:grid;gap:5px} #${APP.id} .range-label output{float:right;color:var(--acl-accent)} #${APP.id} .checks{display:grid;gap:6px;margin:10px 0} #${APP.id} .checks label{font-weight:normal} #${APP.id} .checks input{width:auto;margin-right:7px} #${APP.id} .diagnostic div{display:grid;grid-template-columns:130px 1fr;gap:8px;padding:7px;border-bottom:1px solid var(--acl-border)} #${APP.id} .diagnostic span{word-break:break-word;color:var(--acl-muted)} #${APP.id} .version-card{display:grid;grid-template-columns:1fr auto;gap:8px;background:var(--acl-panel);padding:12px;border-radius:9px} #${APP.id} footer{display:flex;justify-content:space-between;align-items:center;padding:9px 13px;border-top:1px solid var(--acl-border);font-size:10px;color:var(--acl-muted)} #${APP.id} footer button{font-size:11px;padding:5px 7px} #${APP.id} .modal{display:none;position:fixed;inset:0;background:#000a;z-index:2147483647;align-items:center;justify-content:center;padding:20px} #${APP.id} .modal.show{display:flex} #${APP.id} .modal-card{width:min(430px,95vw);max-height:90vh;overflow:auto;background:var(--acl-bg);border:1px solid var(--acl-border);border-radius:14px;padding:18px;position:relative} #${APP.id} .choice-list{display:grid;gap:6px} #${APP.id} .donation img{display:block;width:260px;max-width:100%;margin:10px auto;background:#fff;padding:8px;border-radius:10px} #${APP.id} .donation .close{position:absolute;right:10px;top:10px} #${APP.id} .copy-row{display:flex;gap:6px;align-items:center} #${APP.id} .copy-row code{flex:1;overflow:auto;background:var(--acl-panel);padding:9px;border-radius:8px} #acl-pix-payload{height:95px;font-size:11px} #${APP.id} .contact-card{background:var(--acl-panel);padding:15px;border-radius:10px} #${APP.id} .contact-card h3{margin-top:0} #${APP.id} .contact-email{display:flex;gap:7px;align-items:center;margin:12px 0} #${APP.id} .contact-email code{flex:1;overflow:auto;background:var(--acl-bg);padding:10px;border:1px solid var(--acl-border);border-radius:8px} #${APP.id} .contact-note{color:var(--acl-muted);font-size:12px} #${APP.id} .empty{color:var(--acl-muted);padding:14px;text-align:center}
  @media(max-width:600px){#${APP.id}{right:6px;bottom:6px;width:calc(100vw - 12px)} #${APP.id} .stats{grid-template-columns:repeat(3,1fr)}}
  `;
  document.documentElement.appendChild(style);document.body.appendChild(panel);

  const $=s=>panel.querySelector(s);
  const els={
    input:$('#acl-input'),file:$('#acl-file'),target:$('#acl-target'),statUnique:$('#s-unique'),statUnits:$('#s-units'),statDup:$('#s-dup'),statInvalid:$('#s-invalid'),statTime:$('#s-time'),invalidBox:$('#acl-validation'),start:$('#acl-start'),pause:$('#acl-pause'),stop:$('#acl-stop'),progress:$('#acl-progress'),progressText:$('#acl-progress-text'),current:$('#acl-current'),remaining:$('#acl-remaining'),status:$('#acl-status'),log:$('#acl-log'),retryFailures:$('#acl-retry'),typingDelay:$('#acl-speed'),speedWarning:$('#acl-speed-warning'),ignoreAlternateArt:$('#acl-ignore-aa'),ignoreParallel:$('#acl-ignore-parallel'),ignoreSP:$('#acl-ignore-sp'),ignoreManga:$('#acl-ignore-manga'),updateCurrent:$('#acl-current-version'),updateLatest:$('#acl-latest-version'),updateStatus:$('#acl-update-status'),updateOpen:$('#acl-open-release'),updateInstall:$('#acl-install-release'),ambiguity:$('#acl-ambiguity'),donation:$('#acl-donation')
  };

  panel.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>showTab(b.dataset.tab));
  panel.querySelector('[data-tab="list"]').classList.add('active');
  $('#acl-collapse').onclick=()=>{const m=panel.querySelector('main'),n=panel.querySelector('nav'),f=panel.querySelector('footer');const hidden=m.style.display==='none';m.style.display=hidden?'block':'none';n.style.display=hidden?'flex':'none';f.style.display=hidden?'flex':'none';$('#acl-collapse').textContent=hidden?'−':'+';};
  document.addEventListener('focusin',e=>{if(!panel.contains(e.target)&&isEditable(e.target)){targetField=e.target;els.target.textContent=`Campo selecionado: ${targetField.id||targetField.name||targetField.tagName.toLowerCase()}`;}},true);
  els.input.addEventListener('input',updateStats);
  els.file.onchange=async()=>{const file=els.file.files?.[0];if(file){els.input.value=await file.text();updateStats();}};
  $('#acl-export-txt').onclick=exportTxt;$('#acl-export-csv').onclick=exportCsv;$('#acl-clear').onclick=()=>{els.input.value='';updateStats();};
  els.start.onclick=()=>{parsedCurrent=parseList(els.input.value);if(!parsedCurrent.cards.length)return setStatus('Nenhuma carta válida.','error');if(parsedCurrent.invalid.length&&!confirm(`${parsedCurrent.invalid.length} linha(s) inválida(s) serão ignoradas. Continuar?`))return;targetField=targetField||detectTarget();if(!targetField)return setStatus('Clique primeiro no campo da lista no site.','error');showTab('run');runCards(parsedCurrent.cards);};
  els.pause.onclick=()=>{runner.paused=!runner.paused;els.pause.textContent=runner.paused?'Continuar':'Pausar';setStatus(runner.paused?'Execução pausada.':'Execução retomada.',runner.paused?'info':'working');};
  els.stop.onclick=()=>{runner.cancelled=true;runner.paused=false;};
  els.retryFailures.onclick=retryFailures;
  $('#acl-copy-report').onclick=()=>{const text=runner.results.map(r=>`${r.ok?'OK':'FALHA'} | ${r.qty}x${r.code} | ${r.chosenText||r.message||''}`).join('\n');typeof GM_setClipboard==='function'?GM_setClipboard(text):navigator.clipboard.writeText(text);setStatus('Relatório copiado.','success');};
  els.typingDelay.onchange=updateSpeedWarning;$('#acl-save-settings').onclick=saveSettingsFromUi;
  $('#acl-copy-email').onclick=()=>{const email='luiz.traghia@gmail.com';typeof GM_setClipboard==='function'?GM_setClipboard(email):navigator.clipboard.writeText(email);setStatus('E-mail copiado.','success');};
  $('#acl-check-update').onclick=()=>checkUpdates(true);
  const openDonation=()=>els.donation.classList.add('show');$('#acl-donate').onclick=openDonation;$('#acl-footer-donate').onclick=openDonation;$('#acl-close-donation').onclick=()=>els.donation.classList.remove('show');
  $('#acl-copy-key').onclick=()=>{typeof GM_setClipboard==='function'?GM_setClipboard(APP.pixKey):navigator.clipboard.writeText(APP.pixKey);setStatus('Chave PIX copiada.','success');};
  $('#acl-copy-payload').onclick=()=>{typeof GM_setClipboard==='function'?GM_setClipboard(APP.pixPayload):navigator.clipboard.writeText(APP.pixPayload);setStatus('PIX Copia e Cola copiado.','success');};

  loadSettingsUi();applyTheme();updateStats();
  const autoTarget=detectTarget();if(autoTarget){targetField=autoTarget;els.target.textContent=`Campo detectado automaticamente: ${autoTarget.id||autoTarget.name||autoTarget.tagName.toLowerCase()}`;}
  if(settings.checkUpdatesOnStart)setTimeout(()=>checkUpdates(false),1200);
})();
