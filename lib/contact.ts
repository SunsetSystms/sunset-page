const projectEmail = "dfreitas.developer@gmail.com";
const projectEmailSubject = "Quero iniciar um projeto digital";
const projectEmailBody = `Olá!
Gostaria de conversar sobre um projeto para minha empresa.

Aguardo o retorno para alinharmos os próximos passos.`;

export const projectWhatsAppLink = `mailto:${projectEmail}?subject=${encodeURIComponent(projectEmailSubject)}&body=${encodeURIComponent(projectEmailBody)}`;
