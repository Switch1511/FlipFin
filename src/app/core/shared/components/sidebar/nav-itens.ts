interface MenuItem {
    label: string;
    icon?: string;
    link: string;
  }

export const menuItems: MenuItem[] = [
    { label: 'Home', icon: 'pi-home', link: '/' },
    { label: 'Lista de Tarefas', icon: 'pi-list', link: '/to-do-list' },
    { label: 'Flashcards', icon: 'pi-copy', link: '/flashcards' },
    { label: 'Anotações', icon: 'pi-pen-to-square', link: '/anotations' },
];