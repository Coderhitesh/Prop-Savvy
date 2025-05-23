import axios from 'axios';
import SingleBlog from '@/components/SingleBlog';

export async function generateMetadata({ params }) {
  try {
    const { slug } = await params;
    const response = await axios.get(`https://www.api.propsavvyrealtors.com/api/v1/get_blog_by_slug/${slug}`);
    // console.log('API response:', response.data); // Ensure this shows the full structure

    if (!response.data || !response.data.data) {
      throw new Error('Invalid response structure');
    }

    const blog = response.data.data;

    return {
      title: blog?.MetaTitle || 'Blog',
      description: blog.MetaDescription || 'Blog details',
      openGraph: {
        title: blog?.MetaTitle || 'Blog',
        description: blog.MetaDescription || 'Blog details',
      }
    };
  } catch (error) {
    console.error('Error fetching blog data:', error.message);

    // Return default metadata in case of error
    return {
      title: 'Blog Details',
      description: 'Blog details page',
      openGraph: {
        title: 'Blog Details',
      description: 'Blog details page',
      }
    };
  }
}

export default async function Page({ params }) {
  const { slug } = await params;
  return (
    <>
      <SingleBlog slug={slug} />
    </>
  );
}
