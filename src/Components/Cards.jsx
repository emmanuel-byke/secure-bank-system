


export function IconCard({icon: Icon, iconControls, title, desc, actionName}) {

  return (
    <div className="m-5 w-1/4">
      <div
        className="rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 bg-[var(--color-neutral)]"
      >
        <div className="flex flex-row gap-3">
            <Icon {...iconControls} />
            <h1 className="text-[var(--color-primary)] mt-5 text-[20px] font-medium tracking-tight font-poppins">
                {title}
            </h1>
        </div>
        <p className="text-[var(--color-primary)] mt-2 text-sm h-15">
          {desc}
        </p>
        <div className="w-full flex flex-row-reverse">
            <button
            className="mt-10 bg-[var(--color-secondary)]/80 px-5 py-2 rounded-sm hover:cursor-pointer hover:bg-[var(--color-secondary)]"
            >
            {actionName}
            </button>
        </div>
      </div>
    </div>
  );
}

export function BGIconCard({icon: Icon, iconControls, title, desc, actionName}) {

  return (
    <div className="m-5 w-1/4">
      <div className="rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 bg-[var(--color-neutral)] relative" >
        <div className="absolute top-1/2 left-1/2 transform -translate-1/2 bg-center bg-cover opacity-10">
          <Icon {...iconControls} />
        </div>

        <div className="flex flex-row gap-3">
            <h1 className="text-[var(--color-primary)] mt-5 text-[20px] font-medium tracking-tight font-poppins">
                {title}
            </h1>
        </div>
        <p className="text-[var(--color-primary)] mt-2 text-sm h-15">
          {desc}
        </p>
        <div className="w-full flex flex-row-reverse">
            <button
            className="mt-10 bg-[var(--color-secondary)]/80 px-5 py-2 rounded-sm hover:cursor-pointer hover:bg-[var(--color-secondary)]"
            >
            {actionName}
            </button>
        </div>
      </div>
    </div>
  );
}

export function InfoCard({title, desc, actionName}) {

  return (
    <div className="w-1/3 flex flex-col">
      <div className="flex flex-row">
          <h1 className="text-black text-[20px] font-medium tracking-tight font-poppins">
              {title}
          </h1>
      </div>
      <p className="text-gray-600 mt-2 text-md text-justify">
        {desc}
      </p>
      <div className="w-full flex flex-row-reverse">
          <button
          className="mt-10 bg-[var(--color-secondary)]/80 px-5 py-2 rounded-sm hover:cursor-pointer hover:bg-[var(--color-secondary)]"
          >
          {actionName}
          </button>
      </div>
    </div>
  );
}