import type { PortfolioProject } from '@/types/types';

// Importação estática das imagens (necessário no Vite para que sejam devidamente empacotadas no build)
// CIDADE NOVA
import cn01 from '@/assets/images/obras/CIDADE NOVA/01.png';
import cn02 from '@/assets/images/obras/CIDADE NOVA/02.png';
import cn03 from '@/assets/images/obras/CIDADE NOVA/03.png';
import cn04 from '@/assets/images/obras/CIDADE NOVA/04.png';
import cn05 from '@/assets/images/obras/CIDADE NOVA/05.png';
import cn06 from '@/assets/images/obras/CIDADE NOVA/06.png';
import cn07 from '@/assets/images/obras/CIDADE NOVA/07.png';
import cn08 from '@/assets/images/obras/CIDADE NOVA/08.png';
import cn09 from '@/assets/images/obras/CIDADE NOVA/09.png';

// QUINTA DO PINHEIRO
import qp01 from '@/assets/images/obras/quinta do pinheiro/01.jpg';
import qp02 from '@/assets/images/obras/quinta do pinheiro/02.jpg';
import qp03 from '@/assets/images/obras/quinta do pinheiro/03.jpg';
import qp04 from '@/assets/images/obras/quinta do pinheiro/04.jpg';
import qp05 from '@/assets/images/obras/quinta do pinheiro/05.jpg';
import qp06 from '@/assets/images/obras/quinta do pinheiro/06.jpg';
import qp07 from '@/assets/images/obras/quinta do pinheiro/07.jpg';

// FACULDADE DE MEDICINA
import fm01 from '@/assets/images/obras/faculdade de medicina/01.png';
import fm02 from '@/assets/images/obras/faculdade de medicina/02.png';
import fm04 from '@/assets/images/obras/faculdade de medicina/04.png';
import fm05 from '@/assets/images/obras/faculdade de medicina/05.png';

// ERPI DO PESO
import larVideo from '@/assets/images/obras/lar/lar covialvi.mp4';
import lar01 from '@/assets/images/obras/lar/ERPI001.webp';
import lar02 from '@/assets/images/obras/lar/ERPI002.webp';
import lar03 from '@/assets/images/obras/lar/ERPI003.webp';
import lar04 from '@/assets/images/obras/lar/ERPI004.webp';
import lar05 from '@/assets/images/obras/lar/ERPI005.webp';
import lar06 from '@/assets/images/obras/lar/ERPI006.webp';
import lar07 from '@/assets/images/obras/lar/ERPI007.webp';
import lar08 from '@/assets/images/obras/lar/ERPI008.webp';
import lar09 from '@/assets/images/obras/lar/ERPI009.webp';
import lar10 from '@/assets/images/obras/lar/ERPI010.webp';
import lar11 from '@/assets/images/obras/lar/ERPI011.webp';
import lar15 from '@/assets/images/obras/lar/ERPI015.webp';

// ESTAÇÃO TORTOSENDO
import et01 from '@/assets/images/obras/estacao torotosendo/01.jpg';
import et02 from '@/assets/images/obras/estacao torotosendo/02.jpg';
import et03 from '@/assets/images/obras/estacao torotosendo/03.jpg';

export const portfolioData: PortfolioProject[] = [
  {
    id: 'cidade-nova',
    title: 'EMPREENDIMENTO CIDADE NOVA',
    location: 'Covilhã, Portugal',
    overviewSummary: 'Condomínio moderno no coração da Covilhã com apartamentos de tipologias variadas e acabamentos de alta qualidade.',
    overviewDetailed: 'Situado numa localização estratégica no centro da Covilhã, junto à Faculdade e a diversas escolas, o empreendimento Cidade Nova reflete o compromisso da Virgílio Roque com a construção de alta qualidade. Este condomínio fechado combina arquitetura contemporânea, rigor técnico e espaços de lazer exclusivos.',
    coverImages: [
      cn01, cn02, cn03, cn04, cn05, cn06, cn07, cn08, cn09
    ],
    gallery: [
      cn02, cn03
    ],
    sections: [
      {
        subtitle: 'Qualidade Construtiva e Sustentabilidade',
        items: [
          'A estrutura foi projetada com soluções técnicas de excelência, com foco na eficiência e na durabilidade:',
          'Isolamento térmico e acústico superior, garantindo total privacidade e bem-estar.',
          'Integração de painéis fotovoltaicos para otimização dos consumos energéticos.',
          'Acabamentos de elevada resistência, incluindo pavimentos vinílicos, madeiras lacadas e portas de alta segurança.'
        ]
      },
      {
        subtitle: 'Lazer e Espaços Comuns',
        items: [
          'O condomínio oferece infraestruturas residenciais diferenciadas para utilização ao longo de todo o ano:',
          'Piscina de água aquecida com cobertura integrada para os meses de inverno.',
          'Ginásio privativo para os residentes.',
          'Áreas de convívio exteriores cuidadosamente planeadas.'
        ]
      },
      {
        subtitle: 'Interiores e Tecnologia',
        items: [
          'Os apartamentos apresentam layouts funcionais que maximizam a luz natural, complementados com tecnologia de conforto diário:',
          'Sistema de controlo de estores e central de aspiração robotizada.',
          'Climatização completa com ar condicionado nas divisões principais.',
          'Cozinhas de linhas modernas com bancadas em Silestone ou equivalente e eletrodomésticos encastrados Teka ou equivalente.'
        ]
      },
      {
        subtitle: 'Mobilidade e Segurança',
        items: [
          'Piso subterrâneo amplo e estruturado para estacionamento seguro.',
          'Lugares de garagem privativos, com opções de estacionamento duplo.',
          'Possibilidade de instalação para carregamento de veículos elétricos.'
        ]
      }
    ]
  },
  {
    id: 'quinta-do-pinheiro',
    title: 'BLOCO HABITACIONAL - QUINTA DO PINHEIRO',
    location: 'Covilhã, Portugal',
    overviewSummary: 'Um dos maiores blocos habitacionais da cidade da Covilhã, este empreendimento residencial de grande escala destaca-se pela robustez construtiva e elevado padrão de qualidade.',
    overviewDetailed: 'O Bloco Habitacional Quinta do Pinheiro afirma-se como um dos maiores edifícios residenciais da cidade da Covilhã. Este projeto de grande envergadura reflete a capacidade de execução logística e técnica da Virgílio Roque, aliando engenharia robusta a um design contemporâneo.',
    coverImages: [
      qp01, qp02, qp03, qp04, qp05, qp06, qp07
    ],
    gallery: [
      qp02, qp03
    ],
    sections: [
      {
        subtitle: 'Solidez e Conforto',
        items: ['Estrutura de grande porte com isolamento térmico e acústico de alta performance.']
      },
      {
        subtitle: 'Qualidade Superior',
        items: ['Utilização de materiais certificados de elevada durabilidade e baixa manutenção.']
      },
      {
        subtitle: 'Arquitetura Funcional',
        items: ['Frações amplas e otimizadas para maximizar a entrada de luz natural.']
      }
    ],
    quote: 'Um projeto de referência que espelha o rigor técnico e a assinatura de confiança da Virgílio Roque.'
  },
  {
    id: 'faculdade-medicina',
    title: 'EDIFÍCIO JUNTO À FACULDADE DE MEDICINA',
    location: 'Covilhã, Portugal',
    overviewSummary: 'Edifício residencial junto à Faculdade de Medicina da UBI, ideal para investimento ou habitação própria.',
    overviewDetailed: 'Localizado numa zona de excelência e de elevada procura na Covilhã, junto à Faculdade de Medicina da UBI e ao Hospital, este edifício residencial reflete o padrão de rigor e qualidade construtiva da Virgílio Roque. Projetado para oferecer uma excelente oportunidade de investimento ou habitação própria, o empreendimento destaca-se pela modernidade, eficiência energética e centralidade.',
    coverImages: [
      fm01, fm02, fm04, fm05
    ],
    gallery: [
      fm02, fm04
    ],
    sections: [
      {
        subtitle: 'Engenharia e Sustentabilidade',
        items: [
          'A construção foi planeada com foco na durabilidade e no desempenho energético, utilizando soluções técnicas avançadas:',
          'Isolamento térmico e acústico de alta performance, garantindo bem-estar e total privacidade no interior das frações.',
          'Integração de painéis fotovoltaicos para otimização dos consumos de energia e redução do impacto ambiental.',
          'Estrutura sólida com materiais de gama superior que asseguram uma manutenção reduzida ao longo dos anos.'
        ]
      },
      {
        subtitle: 'Interiores e Tecnologia',
        items: [
          'Os apartamentos apresentam layouts funcionais com divisões invulgarmente espaçosas e uma excelente exposição solar:',
          'Conforto térmico total assegurado por sistemas de ar condicionado e bomba de calor.',
          'Equipamentos tecnológicos de uso diário, como sistema de controlo de estores e central de aspiração robotizada.',
          'Cozinhas modernas com acabamentos em alto brilho, equipadas com bancadas em Silestone ou equivalente e eletrodomésticos encastrados Teka ou equivalente.'
        ]
      },
      {
        subtitle: 'Mobilidade e Acabamentos Premium',
        items: [
          'O edifício foi pensado para responder às necessidades atuais de segurança e conveniência:',
          'Parqueamento privativo estruturado em piso subterrâneo.',
          'Lugares de estacionamento dotados de possibilidade de instalação para carregamento de veículos elétricos.',
          'Acabamentos de excelência em todas as divisões, incluindo pavimento vinílico de alta resistência e madeiras lacadas.'
        ]
      }
    ]
  },
  {
    id: 'erpi-do-peso',
    title: 'NOVA ERPI DO PESO',
    location: 'Peso, Covilhã, Portugal',
    overviewSummary: 'Equipamento social moderno situado na freguesia do Peso, concebido com instalações de alta qualidade para oferecer conforto, segurança e cuidados de excelência à população sénior.',
    overviewDetailed: 'Situada na tranquilidade do Peso, a nova Estrutura Residencial para Pessoas Idosas (ERPI) reflete o compromisso da Virgílio Roque com a construção de equipamentos sociais de elevada exigência técnica. Este projeto combina arquitetura funcional, rigor normativo e espaços dedicados ao conforto e à segurança máxima dos utentes e profissionais.',
    coverImages: [
      larVideo, lar01, lar02, lar03, lar04, lar05, lar06, lar07, lar08, lar09, lar10, lar11, lar15
    ],
    gallery: [
      lar04, lar15
    ],
    sections: [
      {
        subtitle: 'Qualidade Construtiva e Sustentabilidade',
        items: [
          'A estrutura foi concebida com soluções técnicas adaptadas às necessidades de cuidados continuados, com foco na durabilidade e na eficiência energética:',
          'Isolamento térmico e acústico superior, garantindo um ambiente calmo e acolhedor em todas as estações do ano.',
          'Integração de sistemas eficientes de climatização e painéis solares para otimização dos consumos energéticos.',
          'Acabamentos de elevada resistência, incluindo pavimentos antiderrapantes e materiais de fácil higienização, cumprindo as mais rigorosas normas de saúde.'
        ]
      },
      {
        subtitle: 'Cuidados e Espaços Comuns',
        items: [
          'O edifício oferece infraestruturas amplas e especializadas para promover o convívio, a saúde e o envelhecimento ativo:',
          'Salas de convívio e de atividades ocupacionais com abundante luz natural.',
          'Zonas de refeição e espaços dedicados à saúde (gabinetes médicos e de enfermagem) desenhados para facilitar o trabalho da equipa.',
          'Áreas exteriores e de lazer cuidadosamente planeadas para passeios seguros.'
        ]
      },
      {
        subtitle: 'Interiores e Acessibilidade',
        items: [
          'Os quartos e as instalações sanitárias apresentam disposições totalmente adaptadas, maximizando a ergonomia e a segurança no dia a dia:',
          'Ausência total de barreiras arquitetónicas e portas de grande largura para circulação facilitada de macas e cadeiras de rodas.',
          'Climatização completa e renovação de ar contínua para um rigoroso controlo do ambiente nas divisões principais.',
          'Instalações sanitárias equipadas com ajudas técnicas integradas e modernos sistemas de chamada de emergência.'
        ]
      },
      {
        subtitle: 'Mobilidade e Segurança',
        items: [
          'A infraestrutura garante um ambiente protegido e de fácil acesso para residentes, famílias e equipas de apoio:',
          'Acessos exteriores amplos, planeados para a rápida receção de viaturas de emergência e transporte adaptado.',
          'Sistemas avançados de segurança contra incêndios e iluminação de emergência em todo o edifício.',
          'Zonas de estacionamento estruturadas e seguras para visitantes e colaboradores.'
        ]
      }
    ],
    quote: 'ENGENHARIA E BEM-ESTAR NO PESO'
  },
  {
    id: 'estacao-tortosendo',
    title: 'ESTAÇÃO TORTOSENDO',
    location: 'Tortosendo, Covilhã, Portugal',
    overviewSummary: 'Requalificação e modernização integral da Estação Ferroviária do Tortosendo, focada na melhoria das acessibilidades, segurança e durabilidade das infraestruturas para todos os utentes.',
    overviewDetailed: 'Empreitada de modernização e requalificação da Estação Ferroviária do Tortosendo, adaptando esta infraestrutura pública aos exigentes padrões atuais de segurança, conforto e mobilidade regional.',
    coverImages: [
      et01
    ],
    gallery: [
      et02, et03
    ],
    sections: [
      {
        subtitle: 'Engenharia e Reabilitação',
        items: [
          'Intervenção profunda em fachadas, coberturas e pavimentos para garantir maior isolamento e resistência ao tráfego diário.',
          'Atualização integral das redes elétricas, sistemas de iluminação e redes de escoamento de águas.'
        ]
      },
      {
        subtitle: 'Acessibilidade e Funcionalidade',
        items: [
          'Eliminação de barreiras arquitetónicas nos acessos e remodelação dos cais de embarque para garantir total mobilidade.',
          'Reorganização das zonas envolventes de ligação entre a estação, áreas de estacionamento e a via pública.',
          'Melhoria das áreas de espera para proporcionar maior conforto aos passageiros.'
        ]
      }
    ],
    quote: 'Uma obra com o selo de rigor técnico e solidez da Virgílio Roque.'
  }
];
