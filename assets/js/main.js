import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";
import { modal } from "./modal.js";

modal("mymodal1", "close1", "open-modal1");
modal("mymodal2", "close2", "open-modal2");
modal("mymodal3", "close3", "open-modal3");
modal("mymodal4", "close4", "open-modal4");
modal("mymodal5", "close5", "open-modal5");
modal("mymodal6", "close6", "open-modal6");

menu();

hoverChangeExperience(
  ".digitalhouse",
  `Atualmente trabalho como professor conteudista em frontend na
  Digital House, o trabalho consiste em criar conteúdos para as
  aulas de especialização frontend. Alguns dos conteúdos
  realizados foram: React, Redux, TypeScript, Testes com Jest,
  GraphQL e styled-components.`,
  "Professor conteudista frontend",
  "Digital House",
  "Nov 2021 - Atual"
);

hoverChangeExperience(
  ".zuplae",
  `Trabalhei como Social Media e Designer na Zuplae que é um escola
  de programação, onde teve como foco as criações de conteúdos sobre
  programação para a comunidade dev através das redes sociais.`,
  "Social Media e UI Designer",
  "Zuplae",
  "Jan 2022 - Abril 2022"
);

hoverChangeExperience(
  ".codigofontetv",
  `Trabalhei como Social Media e Designer no Código Fonte TV, 
  onde teve como foco as criações de conteúdos sobre programação 
  para a comunidade dev através das redes sociais do CDF.`,
  "Social Media e Designer",
  "Código Fonte TV",
  "Jun 2021 - Jan 2022"
);

hoverChangeExperience(
  ".contweb",
  `Realizei o estágio na ContWeb, uma empresa de contabilidade. 
  Onde pela primeira vez tive experiência com o React. Além do
  desenvolvimento frontend criei as UI das novas plataformas da empresa.`,
  "Developer frontend e UI Designer",
  "ContWeb",
  "Set 2021 - Nov 2021"
);

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
);
hoverChangeDescription(
  ".sass",
  "Sass (pré-processador css) é uma linguagem de folhas de estilo. É uma simples linguagem de script usada em arquivos Sass."
);
hoverChangeDescription(
  ".react",
  "ReactJS é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
);
hoverChangeDescription(
  ".next",
  "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React."
);
hoverChangeDescription(
  ".styled",
  "Styled Components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS é um framework desenvolvido para maximizar o potencial do bom e velho CSS e levá-lo ainda mais longe."
);
