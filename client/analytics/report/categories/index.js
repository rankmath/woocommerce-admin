/** @format */
/**
 * External dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import PropTypes from 'prop-types';
import { __ } from '@wordpress/i18n';

/**
 * WooCommerce dependencies
 */
import { ReportFilters } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import { charts, filters } from './config';
import CategoriesReportTable from './table';
import getSelectedChart from 'lib/get-selected-chart';
import ReportChart from 'analytics/components/report-chart';
import ReportSummary from 'analytics/components/report-summary';
import ProductsReportTable from '../products/table';

export default class CategoriesReport extends Component {
	getChartMeta() {
		const { query } = this.props;
		const isCompareView =
			'compare-categories' === query.filter &&
			query.categories &&
			query.categories.split( ',' ).length > 1;
		const isSingleCategoryView = 'single_category' === query.filter && !! query.categories;

		const mode = isCompareView || isSingleCategoryView ? 'item-comparison' : 'time-comparison';
		const itemsLabel = isSingleCategoryView
			? __( '%d products', 'wc-admin' )
			: __( '%d categories', 'wc-admin' );

		return {
			isSingleCategoryView,
			itemsLabel,
			mode,
		};
	}

	render() {
		const { isRequesting, query, path } = this.props;
		const { mode, itemsLabel, isSingleCategoryView } = this.getChartMeta();

		const chartQuery = {
			...query,
		};

		if ( 'item-comparison' === mode ) {
			chartQuery.segmentby = isSingleCategoryView ? 'product' : 'category';
		}

		return (
			<Fragment>
				<ReportFilters query={ query } path={ path } filters={ filters } />
				<ReportSummary
					charts={ charts }
					endpoint="categories"
					isRequesting={ isRequesting }
					limitProperties={ isSingleCategoryView ? [ 'products', 'categories' ] : [ 'categories' ] }
					query={ chartQuery }
					selectedChart={ getSelectedChart( query.chart, charts ) }
				/>
				<ReportChart
					filters={ filters }
					charts={ charts }
					mode={ mode }
					endpoint="categories"
					limitProperties={ isSingleCategoryView ? [ 'products', 'categories' ] : [ 'categories' ] }
					path={ path }
					query={ chartQuery }
					isRequesting={ isRequesting }
					itemsLabel={ itemsLabel }
					selectedChart={ getSelectedChart( query.chart, charts ) }
				/>
				{ isSingleCategoryView ? (
					<ProductsReportTable
						isRequesting={ isRequesting }
						query={ query }
						baseSearchQuery={ { filter: 'single_category' } }
						hideCompare={ isSingleCategoryView }
					/>
				) : (
					<CategoriesReportTable isRequesting={ isRequesting } query={ query } />
				) }
			</Fragment>
		);
	}
}

CategoriesReport.propTypes = {
	query: PropTypes.object.isRequired,
	path: PropTypes.string.isRequired,
};
