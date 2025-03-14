interface MenuItem {
    label: string;
    icon?: string;
    link: string;
  }

export const menuItems: MenuItem[] = [
    { label: 'Home', icon: 'pi-home', link: '/' },
    { label: 'Planos', icon: 'pi-folder', link: '/plans' },
    { label: 'Diciplinas', icon: 'pi-table', link: '/disciplines' },
    { label: 'Flashcards', icon: 'pi-copy', link: '/flashcards' },
    { label: 'Lista de Tarefas', icon: 'pi-list', link: '/to-do-list' },
    { label: 'Planejamento', icon: 'pi-calendar', link: '/planning' },
    { label: 'Anotações', icon: 'pi-pen-to-square', link: '/annotations' },
];