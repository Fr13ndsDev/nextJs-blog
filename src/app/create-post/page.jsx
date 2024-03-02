"use client";
import { CreateNewPost } from "@/actions/CreateNewPost";
import { getAllUser } from "@/actions/getAllUsers";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const [response, setResponse] = useState();
  useEffect(() => {
    async function foo() {
      const res = await getAllUser();
      setResponse(res);
    }
    foo();
  }, []);
  const { register, reset, handleSubmit } = useForm();
  const onSubmit = (data) => {
    try {
      CreateNewPost(data);
      console.log(data);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  // const response = getAllUser();
  return (
    <>
      <section className="bg-gray-500  dark:bg-gray-900 py-16">
        <div className="flex w-[80%] flex-col items-center px-6 py-8 mx-auto lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Flowbite
          </a>
          <div className="w-full my-4 bg-white rounded-lg shadow">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create page
              </h1>
              <form
                className="space-y-4 w-full d-flex "
                action="#"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex gap-10">
                  <div className="flex-1">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Enter a name
                    </label>
                    <input
                      type="text"
                      name="fName"
                      id="fName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name"
                      required=""
                      {...register("fName")}
                    />
                  </div>

                  <div className="flex-1">
                    <label
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Enter a title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="enter title"
                      required=""
                      {...register("title")}
                    />
                  </div>
                </div>

                <div className="flex gap-10">
                  <div className="flex-1">
                    <label
                      htmlFor="date"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Enter a date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required=""
                      {...register("date")}
                    />
                  </div>

                  <div className="flex-1">
                    <label
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Enter a type
                    </label>
                    <input
                      type="text"
                      name="type"
                      id="type"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="enter type"
                      required=""
                      {...register("type")}
                    />
                  </div>
                </div>

                <div className="flex gap-10">
                  <div className="flex-1">
                    <label
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Enter a image
                    </label>
                    <input
                      type="text"
                      name="text"
                      id="img"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="enter a image"
                      required=""
                      {...register("img")}
                    />
                  </div>

                  <div className="flex-1">
                    <label
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Enter a avu
                    </label>
                    <input
                      type="text"
                      name="text"
                      id="avatar"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="enter a your image"
                      required=""
                      {...register("avatar")}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className=" text-white bg-sky-600  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-[30px] py-[10px] text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className=" w-[78%] mt-10  bg-white rounded-md mx-auto shadow-md">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  Author
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
              </tr>
            </thead>
            <tbody>
              {response?.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    <Image
                      className="rounded-md h-[90px] object-cover"
                      src={item.img}
                      alt=""
                      width={90}
                      height={90}
                    />
                  </th>
                  <td className="px-6 py-4">{item.title}</td>
                  <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    {item.fName}
                  </td>
                  <td className="px-6 py-4">{item.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Page;
