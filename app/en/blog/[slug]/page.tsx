import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import CTA from '@/components/ui/CTA'
import { BreadcrumbJsonLd, ArticleJsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/utils'
import { posts } from '@/app/blog/[slug]/page'
import { postsEn } from '@/app/en/blog/posts-en'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts[params.slug]
  if (!post) return {}

  const enData = postsEn[params.slug]
  const title = enData?.title ?? post.title
  const description = enData?.excerpt ?? post.excerpt

  return {
    title: `${title} | CHD Chołuj Design`,
    description,
    alternates: {
      canonical: `${SITE_URL}/en/blog/${params.slug}`,
      languages: {
        pl: `${SITE_URL}/blog/${params.slug}`,
        en: `${SITE_URL}/en/blog/${params.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/en/blog/${params.slug}`,
      type: 'article',
      publishedTime: post.date,
      section: enData?.category ?? post.category,
      ...(post.coverImage && { images: [{ url: `${SITE_URL}${post.coverImage}` }] }),
    },
  }
}

export default function EnBlogPostPage({ params }: Props) {
  const post = posts[params.slug]
  if (!post) notFound()

  const enData = postsEn[params.slug]
  const title = enData?.title ?? post.title
  const category = enData?.category ?? post.category
  const html = enData?.html ?? post.html
  const content = post.content

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/en' },
          { name: 'Blog', href: '/en/blog' },
          { name: title, href: `/en/blog/${params.slug}` },
        ]}
      />
      <ArticleJsonLd
        title={title}
        description={enData?.excerpt ?? post.excerpt}
        slug={params.slug}
        date={post.date}
        image={post.coverImage}
        category={category}
      />

      <section className="py-20 bg-white">
        <div className="container-site max-w-3xl">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-10">
            <Link href="/en" className="hover:text-gold">Home</Link>
            <span>/</span>
            <Link href="/en/blog" className="hover:text-gold">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">{title}</span>
          </nav>

          <p className="text-xs uppercase tracking-widest text-gold mb-3">{category}</p>
          <h1 className="font-display text-4xl text-navy mb-4 leading-tight">{title}</h1>
          <time className="text-sm text-gray-400 block mb-12">
            {new Date(post.date).toLocaleDateString('en-GB', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>

          {post.coverImage && (
            <div className="relative aspect-[16/9] overflow-hidden bg-stone-100 mb-12">
              <Image
                src={post.coverImage}
                alt={title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}

          {html ? (
            <div
              className="prose prose-stone max-w-none
                prose-headings:font-display prose-headings:font-normal prose-headings:text-navy
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-3
                prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-2
                prose-p:text-gray-600 prose-p:leading-relaxed
                prose-li:text-gray-600 prose-li:leading-relaxed
                prose-strong:text-navy prose-strong:font-semibold
                prose-a:text-gold prose-a:no-underline hover:prose-a:underline
                prose-ul:my-4 prose-ol:my-4"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ) : (
            <div className="prose prose-stone max-w-none prose-headings:font-display prose-headings:font-normal prose-headings:text-navy">
              <p>{content}</p>
            </div>
          )}

          {post.gallery && post.gallery.length > 1 && (
            <div className="mt-12 grid grid-cols-2 gap-2">
              {post.gallery.map((src, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <Image
                    src={src}
                    alt={`${title} — ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 384px"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 pt-10 border-t border-gray-100">
            <Link href="/en/blog" className="text-sm text-gold hover:underline tracking-wide">
              ← Back to blog
            </Link>
          </div>
        </div>
      </section>

      <CTA
        title="Have a project in mind?"
        description="Tell us about your needs — we'll get back to you."
        href="/en/contact"
        label="Get in touch"
      />
    </>
  )
}
