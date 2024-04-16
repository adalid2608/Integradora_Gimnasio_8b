import {
  ChartPieIcon,
  BasketIcon,
  ApertureIcon,
  ShoppingCartIcon,
  CircleDotIcon,
  MailBoltIcon,
  CalendarIcon,
  ClipboardCheckIcon,
  ChartDonut3Icon,
  FormsIcon,


} from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipBgColor?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: 'Home' },
  {
    title: "Analytical",
    icon: ChartPieIcon,
    to: "/dashboards/analytical",
  },
  {
    title: "eCommerce",
    icon: ShoppingCartIcon,
    to: "/dashboards/ecommerce",
  },
  { header: 'Atencion al cliente' },
  {
    title: "Quejas y sugerencias",
    icon: MailBoltIcon,
    to: "/dashboardmao/analytical",
  },
  {
    title: "Servicios",
    icon: MailBoltIcon,
    to: "/dashboardmao/services_c",
  },
  {
    title: "Sesiones(Plan Saludable)",
    icon: CalendarIcon,
    to: "/dashboardmao/ecommerce",
  },

  {
    title: " Dashboard Satisfaccion al Cliente",
    icon: ClipboardCheckIcon,
    to: "/dashboardmao/modern",
  },
  {
    title: "Calendario Usuario",
    icon: CalendarIcon,
    to: "/dasboardmao/calendarCl",
  },
  {
    title: "Blog",
    icon: ChartDonut3Icon,
    to: "/dasboardmao/dash",
  },
  {
    title: "Satisfaccion al cliente",
    icon: FormsIcon,
    to: "/dasboardmao/form"
  },

  {
    title: 'Nutrición',
    icon: BasketIcon,
    to: '/dashboards/nutricion/',
    children: [
      {
        title: 'Evaluación Nutricional',
        icon: CircleDotIcon,
        to: '/dashboards/nutricion/evaluacion-nutricional'
      },
      {
        title: 'Dietas',
        icon: CircleDotIcon,
        to: '/dashboards/nutricion/dietas'
      },
      {
        title: 'Dashboard',
        icon: CircleDotIcon,
        to: '/dashboards/nutricion/dashboard-nutricion'
      }
    ]
  },


  {
    title: "Modern",
    icon: ApertureIcon,
    to: "/dashboards/modern",
  },
];

export default sidebarItem;
