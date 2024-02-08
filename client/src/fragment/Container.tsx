import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  // const { newsQuery, allNews, newsLoading, searchLoading } = useResultsFetch();
  // const { data, isLoading } = useQuery({
  //   queryKey: ["newsIndonesia", params.id],
  //   queryFn: () => fetchNewsPagination(params.id || "1"),
  //   enabled: !!params.id,
  // });
  // const resultsPagination = data?.data.news;
  // console.log("hasil pagination ", resultsPagination);
  // const handleChangeNext = () => {
  //   const nextPage = parseInt(params.id || "1") + 1;
  //   navigate(`/news/page/${nextPage}`);
  // };

  // const handleChangePrev = () => {
  //   const currentPage = parseInt(params.id || "1");
  //   const prevPage = currentPage > 1 ? currentPage - 1 : 1;
  //   navigate(`/news/page/${prevPage}`);
  // };

  // if (newsLoading || searchLoading || isLoading) {
  //   return <SkeletonCard />;
  // }
  return (
    <>
      <div className="font-[sans-serif] my-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#333] inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">
            News
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg ">
          {children}
        </div>
      </div>
    </>
  );
};

export default Container;
