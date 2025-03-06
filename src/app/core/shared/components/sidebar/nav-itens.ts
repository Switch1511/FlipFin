interface MenuItem {
    label: string;
    icon?: string;
    link: string;
  }

export const menuItems: MenuItem[] = [
    { label: 'Home', icon: 'pi-home', link: '/' },
    { label: 'Flashcards', icon: 'pi-copy', link: '/flashcards' },
    { label: 'Lista de Tarefas', icon: 'pi-list', link: '/to-do-list' },
    { label: 'Planejamento', icon: 'pi-calendar', link: '/anotations' },
    { label: 'Anotações', icon: 'pi-pen-to-square', link: '/anotations' },

];