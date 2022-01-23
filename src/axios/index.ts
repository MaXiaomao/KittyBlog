import AxiosDoll from "./config"

// 获取标签信息
export interface GetLabelRule {
	size: number | null
}
export const getLabel = (params: GetLabelRule) => {
	return AxiosDoll("get", "/api/label", {params})
}

// 获取分类信息
export const getClassify = (params = null) => {
	return AxiosDoll("get", "/api/classify", {params})
}

// 获取文章信息
export interface GetArticleRule {
	classify: number | null
	title: string | null
	label: number | null
	page: number
	pageSize: number
}
export const getArticle = (params: GetArticleRule) => {
	return AxiosDoll("get", "/api/article", {params})
}

// 获取文章内容
export interface GetBodyRule {
	id: number
}
export const getBody = (params: GetBodyRule) => {
	return AxiosDoll("get", "/api/body", {params})
}

// 站点统计信息
export const getSiteCount = (params = null) => {
	return AxiosDoll("get", "/api/siteCount", {params})
}
