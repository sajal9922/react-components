interface Props {
  children: string;
  color: 'primary' | 'secondary' | 'danger' | 'warning';
  onClick: () => void;
}

function Button({ children, onClick, color }: Props) {
  return (
    <button type="button" className={'btn btn-' + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
