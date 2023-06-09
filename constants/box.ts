import { v4 as uuid } from 'uuid';
export type BoxType = 'TITLE' | 'SUBTITLE' | 'TEXT' | 'PADDING';
export type PaddingType = 'outer' | 'inner';

export type PaddingHeightRange = {
	[key in PaddingType]: {
		minHeight: number;
		maxHeight: number;
	}
};
export const BOX_PROPERTY: {
	[key in BoxType]: {
		divClassName: string;
	} & (key extends 'PADDING'
		? PaddingHeightRange
		: {});
} = {
	TITLE: {
		divClassName: 'draggable-title',
	},
	SUBTITLE: {
		divClassName: 'draggable-subtitle',
	},
	TEXT: {
		divClassName: 'draggable-text',
	},
	PADDING: {
		divClassName: 'draggable-padding',
		outer: {
			minHeight: 100,
			maxHeight: 500,
		},
		inner: {
			minHeight: 10,
			maxHeight: 200,
		},
	},
};

export interface DraggableBox {
	id: string;
	placeholder?: string;
	role: BoxType;
	content: string;
	isSelected: boolean;
}

export function generateDraggableBoxProp({
	placeholder,
	role,
}: Pick<DraggableBox, 'placeholder' | 'role'>): DraggableBox {
	switch (role) {
		case 'TITLE':
			return {
				id: uuid(),
				placeholder: placeholder ?? '타이틀',
				role: 'TITLE' as BoxType,
				content: '',
				isSelected: false,
			};
		case 'SUBTITLE':
			return {
				id: uuid(),
				placeholder: placeholder ?? '서브 타이틀',
				role: 'SUBTITLE' as BoxType,
				content: '',
				isSelected: false,
			};
		case 'TEXT':
			return {
				id: uuid(),
				placeholder: placeholder ?? '텍스트',
				role: 'TEXT' as BoxType,
				content: '',
				isSelected: false,
			};
		case 'PADDING':
			return {
				id: uuid(),
				role: 'PADDING' as BoxType,
				content: '10',
				isSelected: false,
			};

		default:
			throw new Error(
				`[functioin generateDraggableBox] BoxType이 올바르지 않습니다. \n입력된 BoxType:${role}`,
			);
	}
}

export function getInitialBoxList(params: {
	title: string;
	subTitle: string;
	text: string;
}) {
	const { title, subTitle, text } = params;
	return [
		generateDraggableBoxProp({ placeholder: title, role: 'TITLE' }),
		generateDraggableBoxProp({ role: 'PADDING' }),
		generateDraggableBoxProp({ placeholder: subTitle, role: 'SUBTITLE' }),
		generateDraggableBoxProp({ role: 'PADDING' }),
		generateDraggableBoxProp({ placeholder: text, role: 'TEXT' }),
		generateDraggableBoxProp({ role: 'PADDING' }),
	];
}
