import React, {useState, useEffect} from 'react';
import {colors} from '@josafa/tokens';
import { getContrast } from 'polished';

export const ColorsGrid = () => {
    const [copy, setCopy] = useState('');

    useEffect(() => {
        if (copy) {
            setTimeout(() => {
                setCopy('');
            }, 2000);
        }

        return () => {
            clearTimeout();
        };
    }, [copy]);

    return Object.entries(colors).map(([name, value]) => (
        <div 
            key={name} 
            style={{ 
                backgroundColor: value, 
                padding: '1rem',
                width: '30%',
                cursor: 'pointer',
            }}
            onClick={() => {
                navigator.clipboard.writeText(value);
                setCopy(name);
            }}
        >
            <div
                style={{
                    color: getContrast(value, '#fff') < 3.5 ? '#000' : '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    fontFamily: 'sans-serif',
                    textTransform: 'uppercase',
                    position: 'relative',
                }}
            >
                {copy === name && 
                <span
                    style={{
                        position: 'absolute',
                        inset: '0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: value,
                        fontWeight: 'bold',
                    }}
                >Copied!</span>}
                <strong>{name}</strong>
                <span>{value}</span>
            </div>
        </div>
    ))
}