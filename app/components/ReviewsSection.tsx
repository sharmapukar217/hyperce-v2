import { Container } from "./Container";

export const ReviewsSection = () => {
  return (
    <section className="pt-32 text-muted-foreground md:pt-20" id="reviews">
      <Container>
        <div className="mx-auto md:w-3/5">
          <h2 className="text-center text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
            Trusted by thousands
          </h2>
          <p className="mt-4 text-center text-muted-foreground">
            Repellendus atque illum odio! Fugiat at expedita deserunt dolorum molestias.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-muted to-background">
              <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-muted shadow border p-8">
                <div className="flex gap-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="./images/avatars/avatar.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Daniella Doe</h3>
                    <p className="text-sm text-muted-foreground">Mobile dev</p>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum
                  quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a
                  suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque
                  quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis
                  harum et rerum.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-muted to-background">
              <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-muted shadow border p-8">
                <div className="flex gap-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="./images/avatars/avatar-1.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Daniella Doe</h3>
                    <p className="text-sm text-muted-foreground">@hundler</p>
                  </div>
                </div>
                <p>
                  Illum aliquid quo eum quae quos illo laboriosam deleniti aperiam ab veniam sint
                  non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit,
                  veritatis harum et rerum.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-muted to-background">
              <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-muted shadow border p-8">
                <div className="flex gap-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="./images/avatars/avatar-1.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Daniella Doe</h3>
                    <p className="text-sm text-muted-foreground">Mobile dev</p>
                  </div>
                </div>
                <p>
                  Nostrum minus libero sit amet consectetur, adipisicing elit ab veniam sint non
                  cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit,
                  veritatis harum et rerum.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-muted to-background">
              <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-muted shadow border p-8">
                <div className="flex gap-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="./images/avatars/avatar-3.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Daniella Doe</h3>
                    <p className="text-sm text-muted-foreground">Mobile dev</p>
                  </div>
                </div>
                <p>
                  Nostrum minus libero sit amet consectetur, adipisicing elit ab veniam sint non
                  cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit,
                  veritatis harum et rerum.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-muted to-background">
              <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-muted shadow border p-8">
                <div className="flex gap-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="./images/avatars/avatar-2.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Daniella Doe</h3>
                    <p className="text-sm text-muted-foreground">@hundler</p>
                  </div>
                </div>
                <p>
                  Illum aliquid quo eum quae quos illo laboriosam deleniti aperiam ab veniam sint
                  non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit,
                  veritatis harum et rerum.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6 sm:hidden lg:block">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-muted to-background">
              <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-muted shadow border p-8">
                <div className="flex gap-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="./images/avatars/avatar.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Daniella Doe</h3>
                    <p className="text-sm text-muted-foreground">Mobile dev</p>
                  </div>
                </div>
                <p>
                  Architecto laboriosam. Sint libero voluptas veniam at reprehenderit, veritatis
                  harum et rerum.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-muted to-background">
              <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-muted shadow border p-8">
                <div className="flex gap-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="./images/avatars/avatar-4.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Daniella Doe</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-300">@hundler</p>
                  </div>
                </div>
                <p>
                  Illum aliquid quo deleniti aperiam ab veniam sint non cumque quis tempore
                  cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et
                  rerum.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-muted to-background">
              <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-muted shadow border p-8">
                <div className="flex gap-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="./images/avatars/avatar.webp"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Daniella Doe</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-300">@hundler</p>
                  </div>
                </div>
                <p>
                  Illum aliquid quo deleniti aperiam ab veniam Sint libero voluptas veniam at
                  reprehenderit, veritatis harum et rerum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
