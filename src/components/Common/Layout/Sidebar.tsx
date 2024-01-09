interface SidebarProps {
  sidebarOpen?: boolean;
  setSidebarOpen?: (arg: boolean) => void;
}
const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  return (
    <>
      <aside
        className={`h-screen w-[250px] flex-col overflow-y-hidden bg-black text-white`}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
          eligendi odit! Fugiat eaque laudantium maxime. Ipsa rerum corrupti in
          totam veritatis reprehenderit quae fugiat, sit quaerat sint
          voluptatibus facilis provident quas distinctio porro inventore commodi
          voluptas enim eligendi aut maxime qui autem quisquam? Illum sint
          mollitia deleniti eligendi qui ducimus unde ex similique aliquid
          quisquam natus totam sed beatae doloribus quos quasi tempora quaerat
          ad voluptatibus, repellat voluptatem nisi commodi. Pariatur nihil
          inventore earum rerum, officia exercitationem praesentium? Fuga rerum
          enim quia atque optio eos consequatur labore velit totam, modi maxime
          voluptatibus impedit placeat nam ut accusamus aspernatur distinctio
          iusto.
        </p>
      </aside>
    </>
  );
};

export default Sidebar;
