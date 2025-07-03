import './Layout.css';
import ProductTemplates from './LayoutComponents/ProductTemplates';
import DeviceTemplates from './LayoutComponents/DeviceTemplates';
import DataObjectTemplates from './LayoutComponents/DataObjectTemplates';
import SignalTemplates from './LayoutComponents/SignalTemplates';
import { useState, useMemo } from 'react';

function Layout({ jsonData }) {
    const [visibleItems, setVisibleItems] = useState(new Set());

    // Переносим проверку данных после всех хуков
    const { fileForDeviceTemplates, fileForDataObjectTemplates, fileForSignalTemplates } = useMemo(() => {
        const result = {
            fileForDeviceTemplates: [],
            fileForDataObjectTemplates: [],
            fileForSignalTemplates: []
        };

        if (!jsonData || typeof jsonData !== 'object') {
            return result;
        }

        const processHierarchy = (data, level = 0, parentVisible = true) => {
            if (!data || typeof data !== 'object') return;

            for (const [key, value] of Object.entries(data)) {
                if (value && typeof value === 'object') {
                    const isVisible = level === 0 || (parentVisible && visibleItems.has(data));
                    
                    if (isVisible) {
                        if (level === 0) {
                            result.fileForDeviceTemplates.push(value);
                        } else if (level === 1) {
                            result.fileForDataObjectTemplates.push(value);
                        } else if (level === 2) {
                            result.fileForSignalTemplates.push(value);
                        }
                        
                        processHierarchy(value, level + 1, isVisible);
                    }
                }
            }
        };

        processHierarchy(jsonData);

        return result;
    }, [jsonData, visibleItems]);

    // Проверка на отсутствие данных теперь здесь
    if (!jsonData || typeof jsonData !== 'object') {
        return <div className="row">Нет данных для отображения</div>;
    }

    const handleShowChildren = (item, shouldShow) => {
        setVisibleItems(prev => {
            const newSet = new Set(prev);
            if (shouldShow) {
                newSet.add(item);
            } else {
                newSet.delete(item);
            }
            return newSet;
        });
    };

    return (
        <div className="row">
            <ProductTemplates file={{ jsonData }} />
            <DeviceTemplates 
                file={fileForDeviceTemplates} 
                onShowChildren={handleShowChildren}
            />
            <DataObjectTemplates 
                file={fileForDataObjectTemplates} 
                onShowChildren={handleShowChildren}
            />
            <SignalTemplates 
                file={fileForSignalTemplates} 
                onShowChildren={handleShowChildren}
            />
        </div>
    );
}

export default Layout;