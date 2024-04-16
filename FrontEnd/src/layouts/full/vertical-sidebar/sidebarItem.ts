import {
  ChartPieIcon,
  BasketIcon,
  ApertureIcon,
  ShoppingCartIcon,
  CircleDotIcon,


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
