const HeaderItem = ({ Icon, title }) => {
  return (
    <div className="flex flex-col items-center justify-center group w-10 hover:text-white sm:w-20 cursor-pointer">
      <Icon className='h-6 mb-1 group-hover:animate-bounce' />
      <strong className='opacity-0 group-hover:opacity-100 tracking-widest uppercase'>{title}</strong>
    </div>
  );
}
 

export default HeaderItem;