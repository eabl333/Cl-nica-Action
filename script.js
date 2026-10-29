const WA="5511945188507";
const wa=(m)=>`https://wa.me/${WA}?text=${encodeURIComponent(m)}`;
const MSG="Olá! Conheci a Clínica Action Oral and Health Care pelo site e gostaria de obter informações sobre uma consulta.";
document.querySelectorAll("[data-wa]").forEach(a=>{a.href=wa(a.dataset.msg||MSG);a.target="_blank";a.rel="noopener"});

// Tratamentos: publicar somente os confirmados pela clínica
const T=[
["Avaliação odontológica","Consulta para conhecer sua saúde bucal e orientar os próximos passos."],
["Limpeza e prevenção","Cuidados periódicos para manter dentes e gengivas saudáveis."],
["Restaurações","Recuperação da forma e da função de dentes afetados por cárie ou fraturas."],
["Clareamento dental","Opção estética para quem deseja um sorriso mais claro, conforme avaliação."],
["Implantes dentários","Reposição de dentes ausentes, com planejamento individualizado."],
["Ortodontia","Alinhamento dos dentes e correção da mordida, conforme cada caso."],
["Tratamento de canal","Tratamento da parte interna do dente quando indicado."],
["Próteses dentárias","Soluções para devolver função mastigatória e estética."],
["Estética odontológica","Procedimentos que harmonizam o sorriso com naturalidade."],
["Cirurgias odontológicas","Procedimentos cirúrgicos indicados após avaliação profissional."]];
const g=document.getElementById("trat");
T.forEach(([n,d])=>{const c=document.createElement("article");c.className="card";
 const h=document.createElement("h3");h.textContent=n;
 const p=document.createElement("p");p.textContent=d;
 const a=document.createElement("a");a.href=wa(`Olá! Gostaria de informações sobre: ${n}.`);a.target="_blank";a.rel="noopener";a.textContent="Consultar pelo WhatsApp";
 c.append(h,p,a);g.append(c)});

// Menu mobile
const b=document.querySelector(".burger"),nav=document.getElementById("nav");
b.onclick=()=>{const o=nav.classList.toggle("open");b.setAttribute("aria-expanded",o)};
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");b.setAttribute("aria-expanded","false")}));

// Formulário -> WhatsApp
const f=document.getElementById("form");
f.addEventListener("submit",e=>{e.preventDefault();
 const v={nome:f.nome.value.trim(),tel:f.tel.value.trim(),ass:f.ass.value.trim()};let ok=true;
 const chk=(k,bad,msg)=>{const el=f[k],er=document.getElementById("e-"+k);el.setAttribute("aria-invalid",bad);er.textContent=bad?msg:"";if(bad)ok=false};
 chk("nome",v.nome.length<2,"Informe seu nome.");
 chk("tel",v.tel.replace(/\D/g,"").length<10,"Informe um telefone com DDD.");
 chk("ass",v.ass.length<3,"Informe o assunto.");
 if(!ok)return;
 window.open(wa(`Olá! Meu nome é ${v.nome}, telefone ${v.tel}. Assunto: ${v.ass}. Conheci a Clínica Action pelo site.`),"_blank","noopener");
});

// Política de privacidade
const d=document.getElementById("privacidade");
document.getElementById("priv-open").onclick=e=>{e.preventDefault();d.showModal()};
document.getElementById("priv-close").onclick=()=>d.close();
