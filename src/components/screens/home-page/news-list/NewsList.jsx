/* eslint-disable react/prop-types */
import Layout from '../../../layout/Layout';
import styles from './NewsList.module.scss';
import News from './news/News';

function NewsList({ stories }) {
	return (
		<section>
			<Layout>
				{!stories.length ? (
					<div className={styles.emptyList}>
						<div>News not found!</div>
					</div>
				) : (
					<ul className={styles.newsList}>
						{stories.map((story, idx) => {
							return <News key={idx} story={story} />;
						})}
					</ul>
				)}
			</Layout>
		</section>
	);
}

export default NewsList;
